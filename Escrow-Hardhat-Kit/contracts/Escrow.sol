 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";
contract EscrowSender is CCIPReceiver, OwnerIsCreator {
    struct EscrowAgreement {
        uint256 agreementID;
        string title;
        address payable client;
        address payable serviceProvider;
        address payable arbiter;
        uint256 agreementAmount;
        uint256 clientStake;
        uint256 serviceProviderStake;
        bool fundsReleased;
        uint8 fundreceiver;
        uint64 sourceChainSelector;
        uint64 destinationChainSelector;
    }
    mapping(uint256 => EscrowAgreement) public agreements;
    mapping(uint256 => bool) public isDisputed;
    mapping (uint256 => bool) public isCompleted;
    uint256 public numOfAgreement;
    IERC20 private linkToken;
    IERC20 private ccipToken;
    event MessageSent(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address receiver,
        EscrowAgreement message,
        address feeToken,
        uint256 fees
    );
    event MessageReceived(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address sender,
        EscrowAgreement message
    );
    constructor(address _router, address _link, address _ccip) CCIPReceiver(_router) {
        linkToken = IERC20(_link);
        ccipToken = IERC20(_ccip);
    }
    function sendMessagePayLINK(
        uint64 _destinationChainSelector,
        address _receiver,
        EscrowAgreement memory message
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            message,
            address(linkToken)
        );
        IRouterClient router = IRouterClient(this.getRouter());
        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);
        _checkLinkBalance(fees);
        _approveLinkToken(fees);
        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);
        emit MessageSent(
            messageId,
            _destinationChainSelector,
            _receiver,
            message,
            address(linkToken),
            fees
        );
        return messageId;
    }
    function createEscrowAgreement(
        string memory _title,
        address payable _client,
        address payable _serviceProvider,
        address payable _arbiter,
        uint256 _amount,
        address _receiver
        )
        public
        payable
    {
        _validateEscrowParams(_client, _serviceProvider);
        approveCcipToken(_amount);
        // require(ccipToken.transferFrom(msg.sender, address(this), _amount * 2), "Staking CCIP failed");
        EscrowAgreement memory agreement = EscrowAgreement(
            numOfAgreement,
            _title,
            _client,
            _serviceProvider,
            _arbiter,
            _amount,
            _amount * 2,
            0,
            false,
            0,
            16015286601757825753,
            12532609583862916517
        );
        agreements[numOfAgreement] = agreement;
        sendMessagePayLINK(
            agreements[numOfAgreement].destinationChainSelector,
            _receiver,
            agreements[numOfAgreement]
        );
        numOfAgreement++;
    }
    function _ccipReceive(Client.Any2EVMMessage memory any2EvmMessage)
        internal
        override
    {
        address sender = abi.decode(any2EvmMessage.sender, (address));
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector;
        EscrowAgreement memory message = abi.decode(
            any2EvmMessage.data,
            (EscrowAgreement)
        );
        agreements[message.agreementID] = message;
        emit MessageReceived(
            any2EvmMessage.messageId,
            sourceChainSelector,
            sender,
            message
        );
    }
    function _buildCCIPMessage(
        address _receiver,
        EscrowAgreement memory message,
        address _feeTokenAddress
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver),
                data: abi.encode(message),
                tokenAmounts: new Client.EVMTokenAmount[](0),
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 400_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }
    function _checkLinkBalance(uint256 fees) internal view {
        require(
            fees <= linkToken.balanceOf(address(this)),
            "Not enough Link token funds"
        );
    }
    function _approveLinkToken(uint256 fees) internal {
        linkToken.approve(address(IRouterClient(this.getRouter())), fees);
    }
    function _validateEscrowParams(address client, address serviceProvider) internal pure {
        require(
            client != address(0) && serviceProvider != address(0),
            "Invalid client or service provider address."
        );
    }
    function approveCcipToken(uint256 amount) internal {
        ccipToken.approve(address(this), amount * 2);
        // require(ccipToken.transferFrom(msg.sender, address(this), amount * 2), "Staking CCIP failed");
    }
    function completedWork(uint256 _agreementId) public {
        require(
            agreements[_agreementId].serviceProvider == msg.sender,
            "Only the service provider can call this function."
        );
        isCompleted[_agreementId] = true;
    }
    function stakeProviderEth(uint256 _agreementId) public payable {
        require(
            agreements[_agreementId].serviceProvider == msg.sender,
            "Only the service provider can call this function."
        );
        require(
            agreements[_agreementId].serviceProviderStake == 0,
            "You have already provided stake."
        );
        require(
            agreements[_agreementId].fundsReleased == false,
            "cant stake after fund released !"
        );
        ccipToken.approve(address(this), agreements[_agreementId].agreementAmount);
        // require(ccipToken.transferFrom(msg.sender, address(this), agreements[_agreementId].agreementAmount), "Staking CCIP failed");
        agreements[_agreementId].serviceProviderStake = agreements[_agreementId].agreementAmount;
    }
    //this function will release funds to serviceProvider for completing his work
    //also this function will refund stake of client and service provider
    function releaseFunds(uint256 _agreementId) public payable {
        require(
            agreements[_agreementId].client == msg.sender,
            "Only the client can approve release of funds."
        );
        require(isDisputed[_agreementId] == false, "There is dispute.");
        require(
            !agreements[_agreementId].fundsReleased,
            "Funds have already been released for this escrow agreement."
        );
        require(
            agreements[_agreementId].clientStake >= 0,
            "There are no funds to release."
        );
        require(
            agreements[_agreementId].serviceProviderStake >= 0,
            "There are no funds to release."
        );
        agreements[_agreementId].fundsReleased = true;
        // here we realising funds to service provider for his work done and also refunding his stake whic he staked while agreement is created
        agreements[_agreementId].serviceProvider.transfer(
            agreements[_agreementId].clientStake
        );
        agreements[_agreementId].client.transfer(
            agreements[_agreementId].serviceProviderStake
        );
    }
    function setDispute(uint256 _agreementId) public {
        require(
            agreements[_agreementId].client == msg.sender ||
                agreements[_agreementId].serviceProvider == msg.sender,
            "only client can access"
        );
        require(isDisputed[_agreementId] == false, "Dispute is alreay true");
        isDisputed[_agreementId] = true;
    }
    function resolveDispute(uint256 _agreementId, bool _releasefund)
        public
        payable
    {
        require(
            isDisputed[_agreementId] == true,
            "There is no dispute to resolve."
        );
        require(
            agreements[_agreementId].arbiter == msg.sender,
            "Only arbiter can resolve despute!"
        );
        if (_releasefund) {
            agreements[_agreementId].client.transfer(
                agreements[_agreementId].clientStake
            );
            agreements[_agreementId].fundreceiver = 1;
        } else {
            agreements[_agreementId].serviceProvider.transfer(
                agreements[_agreementId].serviceProviderStake
            );
            agreements[_agreementId].fundreceiver = 2;
        }
    }
    function cancel(uint256 _agreementId) public {
        require(
            agreements[_agreementId].client == msg.sender,
            "Only the client can cancel the escrow agreement."
        );
        require(isDisputed[_agreementId] == false, "There is dispute.");
        require(
            !agreements[_agreementId].fundsReleased,
            "Funds have already been released for this escrow agreement."
        );
        require(
            agreements[_agreementId].clientStake >= 0,
            "There are no funds to return."
        );
        agreements[_agreementId].client.transfer(
            agreements[_agreementId].clientStake
        );
    }
    // Function to receive Ether. msg.data must be empty
    receive() external payable {}
    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
} 
