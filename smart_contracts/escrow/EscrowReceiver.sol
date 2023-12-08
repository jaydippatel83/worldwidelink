// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";

contract EscrowReceiver is CCIPReceiver, OwnerIsCreator {
    struct EscrowAgreement {
        uint256 agreementID;
        string title;
        // C-client S-serviceProvider A-arbiterer
        address payable[3] CSA;
        uint256 agreementAmount;
        uint256 clientStake;
        uint256 serviceProviderStake;
        bool fundsReleased;
        uint8 fundreceiver;
        uint64 sourceChainSelector;
        uint64 destinationChainSelector;
        string crossChains;
    }

    mapping(uint256 => EscrowAgreement) public agreements;
    mapping(uint256 => bool) public isDisputed;
    mapping(uint256 => bool) public isWorkSubmitted;
    string[] public purposes = [
        "createAgreement",
        "providerStake",
        "submitWork",
        "setDispute",
        "resolvedStake",
        "fundRelease"
    ];
    uint256 public numOfAgreement;
    IERC20 private linkToken;
    IERC20 private ccipToken;
    string public thisPurpose;
    bool public IsPurpuse;
    address private s_lastReceivedTokenAddress;
    uint256 private s_lastReceivedTokenAmount;

    constructor(
        address _router,
        address _link,
        address _ccip
    ) CCIPReceiver(_router) {
        linkToken = IERC20(_link);
        ccipToken = IERC20(_ccip);
    }

    function createAgreementPAYLINK(
        uint64 _destinationChainSelector,
        address _receiver,
        EscrowAgreement memory message
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMessageForAgreement(
            _receiver,
            message,
            address(linkToken),
            numOfAgreement
        );

        IRouterClient router = IRouterClient(this.getRouter());

        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);
        _checkLinkBalance(fees);
        _approveLinkToken(fees);

        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);

        return messageId;
    }

    function createEscrowAgreement(
        string memory _title,
        address payable _client,
        address payable _serviceProvider,
        address payable _arbiter,
        uint256 _amount,
        address _receiver,
        uint64 _destinationChainSelector,
        string memory _crossChains
    ) public payable {
        _validateEscrowParams(_client, _serviceProvider);

        require(
            ccipToken.transferFrom(msg.sender, address(this), _amount * 2),
            "Staking CCIP failed"
        );

        numOfAgreement++;

        EscrowAgreement memory agreement = EscrowAgreement(
            numOfAgreement,
            _title,
            [_client, _serviceProvider, _arbiter],
            _amount,
            _amount * 2,
            0,
            false,
            0,
            16015286601757825753,
            _destinationChainSelector,
            _crossChains
        );

        agreements[numOfAgreement] = agreement;

        createAgreementPAYLINK(
            agreements[numOfAgreement].destinationChainSelector,
            _receiver,
            agreements[numOfAgreement]
        );
    }

    function SubmitWork(uint256 _agreementId, address _receiver) public onlyServiceProvider(_agreementId) {
        isWorkSubmitted[_agreementId] = true;

        submitWorkPAYLINK(
            agreements[_agreementId].sourceChainSelector,
            _receiver,
            isWorkSubmitted[_agreementId],
            _agreementId
        );
    }

    function submitWorkPAYLINK(
        uint64 _destinationChainSelector,
        address _receiver,
        bool _IsCompleted,
        uint256 _agreementId
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForSubmitWork(
            _receiver,
            _IsCompleted,
            _agreementId,
            address(linkToken)
        );

        IRouterClient router = IRouterClient(this.getRouter());

        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);
        _checkLinkBalance(fees);
        _approveLinkToken(fees);

        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);

        return messageId;
    }

    function _buildMsgForSubmitWork(
        address _receiver,
        bool message,
        uint256 agreementId,
        address _feeTokenAddress
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "submitWork";

        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver),
                data: abi.encode(purpose, message, agreementId),
                tokenAmounts: new Client.EVMTokenAmount[](0),
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 400_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }

    function setDispute(uint256 _agreementId, address _receiver) public onlyClientOrProvider(_agreementId){
       
        require(isDisputed[_agreementId] == false, "Dispute is alreay true");

        isDisputed[_agreementId] = true;

        if (msg.sender == agreements[_agreementId].CSA[0]) {
            setDisputePAYLINK(
                agreements[_agreementId].destinationChainSelector,
                _receiver,
                isDisputed[_agreementId],
                _agreementId
            );
        } else {
            setDisputePAYLINK(
                agreements[_agreementId].sourceChainSelector,
                _receiver,
                isDisputed[_agreementId],
                _agreementId
            );
        }
    }

    function setDisputePAYLINK(
        uint64 _destinationChainSelector,
        address _receiver,
        bool _IsDisputed,
        uint256 _agreementId
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForSetDispute(
            _receiver,
            _IsDisputed,
            _agreementId,
            address(linkToken)
        );

        IRouterClient router = IRouterClient(this.getRouter());

        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);
        _checkLinkBalance(fees);
        _approveLinkToken(fees);

        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);

        return messageId;
    }

    function _buildMsgForSetDispute(
        address _receiver,
        bool message,
        uint256 agreementId,
        address _feeTokenAddress
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "setDispute";

        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver),
                data: abi.encode(purpose, message, agreementId),
                tokenAmounts: new Client.EVMTokenAmount[](0),
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 400_000, strict: false})
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
        thisPurpose = _purpose;

        if (compareStrings(_purpose, purposes[0])) {
            IsPurpuse = true;
            (
                string memory _purpuse,
                EscrowAgreement memory message,
                uint256 _numOfAgree
            ) = abi.decode(
                    any2EvmMessage.data,
                    (string, EscrowAgreement, uint256)
                );

            agreements[message.agreementID] = message;
            numOfAgreement = _numOfAgree;
        } else if (compareStrings(_purpose, purposes[1])) {
            IsPurpuse = true;
            (string memory _purpuse, EscrowAgreement memory message) = abi
                .decode(any2EvmMessage.data, (string, EscrowAgreement));
            s_lastReceivedTokenAddress = any2EvmMessage
                .destTokenAmounts[0]
                .token;
            s_lastReceivedTokenAmount = any2EvmMessage
                .destTokenAmounts[0]
                .amount;

            agreements[message.agreementID] = message;
        } else if (compareStrings(_purpose, purposes[2])) {
            IsPurpuse = true;
            (
                string memory _purpuse,
                bool _submitWork,
                uint256 _agreementId
            ) = abi.decode(any2EvmMessage.data, (string, bool, uint256));

            isWorkSubmitted[_agreementId] = _submitWork;
        } else if (compareStrings(_purpose, purposes[3])) {
            IsPurpuse = true;
            (
                string memory _purpuse,
                bool _setDispute,
                uint256 _agreementId
            ) = abi.decode(any2EvmMessage.data, (string, bool, uint256));

            isDisputed[_agreementId] = _setDispute;

        } else if (compareStrings(_purpose, purposes[4])) {
            IsPurpuse = true;
            (string memory _purpuse, uint8 _fundReceiver, uint256 _agreementId) = abi
                .decode(any2EvmMessage.data, (string, uint8, uint256));

            agreements[_agreementId].fundreceiver = _fundReceiver;

            require(ccipToken.transfer(agreements[_agreementId].CSA[1], agreements[_agreementId].serviceProviderStake), "service provider Token transfer failed");

        }else if (compareStrings(_purpose, purposes[5])) {
            IsPurpuse = true;
            (string memory _purpuse, bool _isReleased, uint256 _agreementId) = abi
                .decode(any2EvmMessage.data, (string, bool, uint256));

            agreements[_agreementId].fundsReleased = _isReleased;

            require(ccipToken.transfer(agreements[_agreementId].CSA[1], agreements[_agreementId].clientStake), "service provider fund release Token transfer failed");
        }
    }

    function _buildMessageForAgreement(
        address _receiver,
        EscrowAgreement memory message,
        address _feeTokenAddress,
        uint256 _numOfAgreement
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose1 = "createAgreement";

        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver),
                data: abi.encode(purpose1, message, _numOfAgreement),
                tokenAmounts: new Client.EVMTokenAmount[](0),
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 400_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
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

    function _validateEscrowParams(address client, address serviceProvider)
        internal
        pure
    {
        require(
            client != address(0) && serviceProvider != address(0),
            "Invalid client or service provider address."
        );
    }

    function stakeProviderEth(
        uint256 _agreementId,
        address _receiver,
        address _ccipToken
    ) public payable onlyServiceProvider(_agreementId) {
        require(
            agreements[_agreementId].serviceProviderStake == 0,
            "You have already provided stake."
        );

        require(
            agreements[_agreementId].fundsReleased == false,
            "can't stake after fund released !"
        );

        require(
            ccipToken.transferFrom(
                msg.sender,
                address(this),
                agreements[_agreementId].agreementAmount
            ),
            "Staking CCIP failed"
        );

        agreements[_agreementId].serviceProviderStake = agreements[_agreementId]
            .agreementAmount;

        sendCcipTokenWithData(
            agreements[_agreementId].sourceChainSelector,
            _receiver,
            agreements[_agreementId],
            _ccipToken,
            agreements[_agreementId].agreementAmount
        );
    }

    function sendCcipTokenWithData(
        uint64 _destinationChainSelector,
        address _receiver,
        EscrowAgreement memory _message,
        address _token,
        uint256 _amount
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForProviderStake(
            _receiver,
            _message,
            _token,
            _amount,
            address(linkToken)
        );

        // Initialize a router client instance to interact with cross-chain router
        IRouterClient router = IRouterClient(this.getRouter());

        // Get the fee required to send the CCIP message
        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);

        require(
            fees <= linkToken.balanceOf(address(this)),
            "Not enough Link token funds"
        );

        // approve the Router to transfer LINK tokens on contract's behalf. It will spend the fees in LINK
        linkToken.approve(address(router), fees);

        // approve the Router to spend tokens on contract's behalf. It will spend the amount of the given token
        IERC20(_token).approve(address(router), _amount);

        // Send the message through the router and store the returned message ID
        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);

        return messageId;
    }

    function _buildMsgForProviderStake(
        address _receiver,
        EscrowAgreement memory message,
        address _token,
        uint256 _amount,
        address _feeTokenAddress
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "providerStake";

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
                data: abi.encode(purpose, message),
                tokenAmounts: tokenAmounts,
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 200_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }

    //this function will release funds to serviceProvider for completing his work
    //also this function will refund stake of client and service provider
    function releaseFunds(uint256 _agreementId, address _receiverContract, address _cciptoken) public payable onlyClient(_agreementId){
       
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

        // here we realising funds to service provider for his work done and also refunding his stake which he staked while agreement is created

       require(ccipToken.transfer(agreements[_agreementId].CSA[0], agreements[_agreementId].serviceProviderStake), "client's Token transfer refund failed");

         _releaseFund(_agreementId, _receiverContract, _cciptoken);
    }

    function _releaseFund(
        uint256 _agreementId,
        address _receiver,
        address _ccipToken
    ) public payable {

        senfRefundtoeknAndData(
            agreements[_agreementId].destinationChainSelector,
            _receiver,
            agreements[_agreementId].fundsReleased,
            _agreementId,
            _ccipToken,
            agreements[_agreementId].clientStake
        );
    }

     function senfRefundtoeknAndData(
        uint64 _destinationChainSelector,
        address _receiver,
        bool _IsReleased,
        uint256 _agreementId,
        address _token,
        uint256 _amount
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForFundReleased(
            _receiver,
            _IsReleased,
            _agreementId,
            _token,
            _amount,
            address(linkToken)
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

        function _buildMsgForFundReleased(
        address _receiver,
        bool message,
        uint256 agreementId,
        address _token,
        uint256 _amount,
        address _feeTokenAddress
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "fundRelease";

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
                data: abi.encode(purpose, message, agreementId),
                tokenAmounts: tokenAmounts,
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 200_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }

    function resolveDispute(uint256 _agreementId, bool _releasefund, address _receiverContract, address _ccpitoken)
        public
        payable
    {
        require(
            isDisputed[_agreementId] == true,
            "There is no dispute to resolve."
        );

        require(
            agreements[_agreementId].CSA[2] == msg.sender,
            "Only arbiter can resolve despute!"
        );

        if (_releasefund) {

        require(ccipToken.transfer(agreements[_agreementId].CSA[0], agreements[_agreementId].clientStake), "client's Token transfer failed");

            agreements[_agreementId].fundreceiver = 1;
        } else {
            agreements[_agreementId].fundreceiver = 2;

            _resolveDispute(_agreementId, _receiverContract, _ccpitoken);
        }
    }


    function _resolveDispute(
        uint256 _agreementId,
        address _receiver,
        address _ccipToken
    ) public payable {

        sendResolvedStakeAndData(
            agreements[_agreementId].destinationChainSelector,
            _receiver,
            agreements[_agreementId].fundreceiver,
            _agreementId,
            _ccipToken,
            agreements[_agreementId].serviceProviderStake
        );
    }


    function sendResolvedStakeAndData(
        uint64 _destinationChainSelector,
        address _receiver,
        uint8 _message,
        uint256 _agreementId,
        address _token,
        uint256 _amount
    ) internal returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildMsgForResolveStake(
            _receiver,
            _message,
            _agreementId,
            _token,
            _amount,
            address(linkToken)
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


    function _buildMsgForResolveStake(
        address _receiver,
        uint8 message,
        uint256 agreementId,
        address _token,
        uint256 _amount,
        address _feeTokenAddress
    ) internal pure returns (Client.EVM2AnyMessage memory) {
        string memory purpose = "resolvedStake";

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
                data: abi.encode(purpose, message, agreementId),
                tokenAmounts: tokenAmounts,
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: 200_000, strict: false})
                ),
                feeToken: _feeTokenAddress
            });
    }


    function cancel(uint256 _agreementId) public onlyClient(_agreementId){
        require(isDisputed[_agreementId] == false, "There is dispute.");
        require(
            !agreements[_agreementId].fundsReleased,
            "Funds have already been released for this escrow agreement."
        );
        require(
            agreements[_agreementId].clientStake >= 0,
            "There are no funds to return."
        );

        require(
            agreements[_agreementId].serviceProviderStake <= 0,
            "you can not cancel agreement, provider is staked!!"
        );

        require(ccipToken.transfer(agreements[_agreementId].CSA[0], agreements[_agreementId].clientStake), "client's Token transfer failed");

       
        agreements[_agreementId].CSA[0].transfer(
            agreements[_agreementId].clientStake
        );
    }

    modifier onlyServiceProvider(uint256 _agreementId) {
        require(
            agreements[_agreementId].CSA[1] == msg.sender,
            "Only the service provider can call this function."
        );
        _;
    }

    modifier onlyClient(uint256 _agreementId) {
        require(
            agreements[_agreementId].CSA[0] == msg.sender,
            "Only the service provider can call this function."
        );
        _;
    }

    modifier onlyClientOrProvider(uint256 _agreementId) {
        require(
            agreements[_agreementId].CSA[0] == msg.sender ||
                agreements[_agreementId].CSA[1] == msg.sender,
            "Only the client or provider can call this function."
        );

        _;
    }

    receive() external payable {}

    fallback() external payable {}
}
