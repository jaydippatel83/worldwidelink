// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LiquidStake is CCIPReceiver, OwnerIsCreator {
    struct StakingInfo {
        uint256 stakedBalance;
        uint256 stTokenBalance;
        uint64 sourceChainSelector;
        uint64 destinationChainSelector;
    }

    IERC20 public ccipToken;
    IERC20 private linkToken;

    string[] public purposes = ["stake", "unstake"];

    uint256 public stakingRatio = 1;

    mapping(address => StakingInfo) public stakingInfos;
    address[] public userAddresses;
    uint256 public totalUsers;

    event Staked(address indexed user, uint256 amount, uint256 stTokenAmount);
    event Unstaked(
        address indexed user,
        uint256 stTokenAmount,
        uint256 originalAmount
    );

    constructor(
        address _router,
        address _link,
        address _ccip
    ) CCIPReceiver(_router) {
        linkToken = IERC20(_link);
        ccipToken = IERC20(_ccip);
    }

    function stake(
        uint256 amount,
        address _receiver,
        address _ccipToken
    ) external {

        require(
            ccipToken.transferFrom(msg.sender, address(this), amount),
            "Staking CCIP failed!"
        );

        uint256 stTokenAmount = amount * stakingRatio;

        if (stakingInfos[msg.sender].stakedBalance == 0) {
            totalUsers++;
            userAddresses.push(msg.sender);
        }
        stakingInfos[msg.sender].stakedBalance += amount;
        stakingInfos[msg.sender].stTokenBalance += stTokenAmount;
        stakingInfos[msg.sender].sourceChainSelector = 16015286601757825753;
        stakingInfos[msg.sender]
            .destinationChainSelector = 12532609583862916517;

        emit Staked(msg.sender, amount, stTokenAmount);

        stakeCcipTokenWithData(
            stakingInfos[msg.sender].destinationChainSelector,
            _receiver,
            stakingInfos[msg.sender],
            _ccipToken,
            amount,
            msg.sender
        );
    }

    function stakeCcipTokenWithData(
        uint64 _destinationChainSelector,
        address _receiver,
        StakingInfo memory _message,
        address _token,
        uint256 _amount,
        address user
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForStake(
            _receiver,
            _message,
            _token,
            _amount,
            address(linkToken),
            totalUsers,
            user
        );

        IRouterClient router = IRouterClient(this.getRouter());

        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);

        require(
            fees <= linkToken.balanceOf(address(this)),
            "Not enough Link token funds"
        );

        linkToken.approve(address(router), fees);

        IERC20(_token).approve(address(router), _amount);

        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);

        return messageId;
    }

    function _buildMsgForStake(
        address _receiver,
        StakingInfo memory message,
        address _token,
        uint256 _amount,
        address _feeTokenAddress,
        uint256 totalNumOfUser,
        address user
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "stake";

        // Set the token amounts
        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        tokenAmounts[0] = Client.EVMTokenAmount({
            token: _token,
            amount: _amount
        });
        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver),
                data: abi.encode(purpose, totalNumOfUser, user, message),
                tokenAmounts: tokenAmounts,
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 2000_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }

    function _ccipReceive(Client.Any2EVMMessage memory any2EvmMessage)
        internal
        override
    {
        address sender = abi.decode(any2EvmMessage.sender, (address));
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector;

        string memory _purpose = abi.decode(any2EvmMessage.data, (string));

        if (compareStrings(_purpose, purposes[1])) {
            (string memory _purpuse, address user, StakingInfo memory message) = abi.decode(
                any2EvmMessage.data,
                (string, address, StakingInfo)
            );

            stakingInfos[user] = message;

            require(
                ccipToken.transfer(
                    user,
                    any2EvmMessage.destTokenAmounts[0].amount
                ),
                "unstaking Token transfer failed"
            );
        } else if (compareStrings(_purpose, purposes[0])) {}
    }

    function getUserAddresses() external view returns (address[] memory) {
        return userAddresses;
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
}
