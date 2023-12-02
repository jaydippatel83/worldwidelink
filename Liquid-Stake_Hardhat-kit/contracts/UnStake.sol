// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LiquidUnStake is CCIPReceiver, OwnerIsCreator, ERC20 {
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
    ) CCIPReceiver(_router) ERC20("StakedCCIP", "stCCIP") {
        linkToken = IERC20(_link);
        ccipToken = IERC20(_ccip);

        uint256 initialSupply = 1000000 * 10**decimals();
        _mint(address(this), initialSupply);
    }

    function _ccipReceive(Client.Any2EVMMessage memory any2EvmMessage)
        internal
        override
    {
        address sender = abi.decode(any2EvmMessage.sender, (address));
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector;

        string memory _purpose = abi.decode(any2EvmMessage.data, (string));

        if (compareStrings(_purpose, purposes[0])) {
            (
                string memory _purpuse,
                uint256 totalNumOfUser,
                address user,
                StakingInfo memory message
            ) = abi.decode(any2EvmMessage.data, (string, uint256, address, StakingInfo));

            totalUsers = totalNumOfUser;
            stakingInfos[user] = message;

            transferstCCIPToUser(user, stakingInfos[user].stTokenBalance);
        } else if (compareStrings(_purpose, purposes[1])) {}
    }

    function unstake(
        uint256 amount,
        address _receiver,
        address _ccipToken
    ) external {
        require(
            stakingInfos[msg.sender].stTokenBalance >= amount,
            "Insufficient StTokens balance"
        );

        sendTokensToContract(amount);
        uint256 originalAmount = amount / stakingRatio;

        stakingInfos[msg.sender].stakedBalance -= originalAmount;
        stakingInfos[msg.sender].stTokenBalance -= amount;

        emit Unstaked(msg.sender, amount, originalAmount);

        unStakeCcipTokenWithData(
            stakingInfos[msg.sender].sourceChainSelector,
            _receiver,
            stakingInfos[msg.sender],
            _ccipToken,
            originalAmount,
            msg.sender
        );
    }

    function unStakeCcipTokenWithData(
        uint64 _destinationChainSelector,
        address _receiver,
        StakingInfo memory _message,
        address _token,
        uint256 _amount,
        address user
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForUnstake(
            _receiver,
            _message,
            _token,
            _amount,
            address(linkToken),
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

    function _buildMsgForUnstake(
        address _receiver,
        StakingInfo memory message,
        address _token,
        uint256 _amount,
        address _feeTokenAddress,
        address user
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "unstake";

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        tokenAmounts[0] = Client.EVMTokenAmount({
            token: _token,
            amount: _amount
        });
        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver),
                data: abi.encode(purpose, user, message),
                tokenAmounts: tokenAmounts,
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 2000_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }

    function sendTokensToContract(uint256 amount) internal {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        bool success = transfer(address(this), amount);

        require(
            success,
            "Transfer failed. Make sure you are transferring the stCCIP token."
        );
    }

    function transferstCCIPToUser(address to, uint256 amount) public {
        require(
            balanceOf(address(this)) >= amount,
            "Insufficient balance in the contract"
        );

        _transfer(address(this), to, amount);
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function userExists(address user) internal returns (bool) {
        for (uint256 i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == user) {
                return true;
            }
        }
        userAddresses.push(user);
        return false;
    }
     function getUserAddresses() external view returns (address[] memory) {
        return userAddresses;
    }
}
