// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;


import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";
import {IERC165} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/utils/introspection/IERC165.sol";

import {IAny2EVMMessageReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IAny2EVMMessageReceiver.sol";
import {MockUSDC} from "./MockUSDC.sol";
import {MockDAI} from "./MockDAI.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

/// @title - A simple messenger contract for sending/receiving messages and tokens across chains.
/// Pay using LINK tokens
contract WorldWideLinkProtocol is CCIPReceiver, OwnerIsCreator {
    // Custom errors to provide more descriptive revert messages.
    error NoMessageReceived(); // Used when trying to access a message but no messages have been received.
    error IndexOutOfBound(uint256 providedIndex, uint256 maxIndex); // Used when the provided index is out of bounds.
    error MessageIdNotExist(bytes32 messageId); // Used when the provided message ID does not exist.
    error NotEnoughBalance(uint256, uint256);
    error NothingToWithdraw(); // Used when trying to withdraw Ether but there's nothing to withdraw.
    error FailedToWithdrawEth(address owner, uint256 value); // Used when the withdrawal of Ether fails.

    // Event emitted when a message is sent to another chain.
    event MessageSent(
        bytes32 indexed messageId, // The unique ID of the message.
        uint64 indexed destinationChainSelector, // The chain selector of the destination chain.
        address receiver, // The address of the receiver on the destination chain.
        address borrower, // The borrower's EOA - would map to a depositor on the source chain.
        Client.EVMTokenAmount tokenAmount, // The token amount that was sent.
        uint256 fees // The fees paid for sending the message.
    );

    // Event emitted when a message is received from another chain.
    event MessageReceived(
        bytes32 indexed messageId, // The unique ID of the message.
        uint64 indexed sourceChainSelector, // The chain selector of the source chain.
        address sender, // The address of the sender from the source chain.
        address depositor, // The EOA of the depositor on the source chain
        Client.EVMTokenAmount tokenAmount // The token amount that was received.
    );

    // Struct to hold details of a message.
    struct MessageIn {
        uint64 sourceChainSelector; // The chain selector of the source chain.
        address sender; // The address of the sender.
        address depositor; // The content of the message.
        address token; // received token.
        uint256 amount; // received amount.
    }

    struct Deposit{
        address token;
        uint256 amount;
        bytes32 messageId;
    }

    struct Borrow{
        address token;
        uint256 amount;
    }

     struct PriceInfo {
        int256 price;
        uint8 decimal;
    }

    // Storage variables.
    mapping(bytes32 => MessageIn) public messageDetail; // Mapping from message ID to MessageIn struct, storing details of each received message.
    mapping(address => mapping(address => uint256)) public deposits; // Depsitor Address => Deposited Token Address ==> amount
    mapping(address => mapping(address => uint256)) public borrowings; // Depsitor Address => Borrowed Token Address ==> amount


    mapping(address => Deposit[]) private depositsList;
    mapping(address => Borrow[]) private borrowingList;


    MockUSDC public usdcToken;
    MockDAI public daiToken;
    LinkTokenInterface linkToken;

    constructor(address _router, address link) CCIPReceiver(_router) {
        linkToken = LinkTokenInterface(link);
        usdcToken = new MockUSDC();
        daiToken = new MockDAI();
    }

    function updateOrAddDeposit(address depositor, address token, uint256 amount, bytes32 messageId) internal {
       // Flag to check if the token exists for the given address
        bool tokenExists = false;

        // Iterate through the array to check if the token exists
        for (uint256 i = 0; i < depositsList[depositor].length; i++) {
            if (depositsList[depositor][i].token == token) {
                // Token exists, update the amount
                depositsList[depositor][i].amount = amount;
                tokenExists = true;
                break;
            }
        }

        // If the token doesn't exist, add a new struct to the array
        if (!tokenExists) {
            Deposit memory newToken = Deposit(token, amount, messageId);
            depositsList[depositor].push(newToken);
        }
    }

     function updateOrAddBorrow(address borrower, address token, uint256 amount) internal {
           // Flag to check if the token exists for the given address
        bool tokenExists = false;

        // Iterate through the array to check if the token exists
        for (uint256 i = 0; i < borrowingList[borrower].length; i++) {
            if (borrowingList[borrower][i].token == address(token)) {
                // Token exists, update the amount
                borrowingList[borrower][i].amount = amount;
                tokenExists = true;
                break;
            }
        }

        // If the token doesn't exist, add a new struct to the array
        if (!tokenExists) {
            Borrow memory newToken = Borrow(address(token), amount);
            borrowingList[borrower].push(newToken);
        }
    }


    /// handle a received message
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        bytes32 messageId = any2EvmMessage.messageId; // fetch the messageId
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector; // fetch the source chain identifier (aka selector)
        address sender = abi.decode(any2EvmMessage.sender, (address)); // abi-decoding of the sender address
        address depositor = abi.decode(any2EvmMessage.data, (address)); // abi-decoding of the depositor's address

        // Collect tokens transferred. This increases this contract's balance for that Token.
        Client.EVMTokenAmount[] memory tokenAmounts = any2EvmMessage
            .destTokenAmounts;
        address token = tokenAmounts[0].token;
        uint256 amount = tokenAmounts[0].amount;

        MessageIn memory detail = MessageIn(
            sourceChainSelector,
            sender,
            depositor,
            token,
            amount
        );
        messageDetail[messageId] = detail;        

        emit MessageReceived(
            messageId,
            sourceChainSelector,
            sender,
            depositor,
            tokenAmounts[0]
        );
        
          // Store depositor data.
        uint256 updatedAmount = deposits[depositor][token] + amount;
        deposits[depositor][token] = updatedAmount;

        updateOrAddDeposit(depositor, token, updatedAmount, messageId);
       
       
    }

    function getPriceAndDecimal(address priceFeedAddress) public view returns (PriceInfo memory) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(priceFeedAddress);

        (, int256 price, , , ) = priceFeed.latestRoundData();
        uint8 decimal = priceFeed.decimals();

        return PriceInfo(price, decimal);
    }

    function borrowUSDC(
        bytes32 msgId,
        address priceFeedAddress
    ) public returns (uint256) {
        uint256 borrowed = borrowings[msg.sender][address(usdcToken)];
        require(borrowed == 0, "Caller has already borrowed USDC");

        address transferredToken = messageDetail[msgId].token;
        require(
            transferredToken != address(0),
            "Caller has not transferred this token"
        );

        uint256 deposited = deposits[msg.sender][transferredToken];
        uint256 borrowable = (deposited * 70) / 100; // 70% collaterization ratio.

        // In this example we treat BnM as though it has the same value MATIC. This is because BnM tokens are dummy tokens that are not on Chainlink Pricefeeds.
        // And that the USD/USDC peg is a perfect 1:1
        // MATIC/USD on Mumbai or ETH/USD on Sepolia
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            priceFeedAddress
        );

        (, int256 price, , , ) = priceFeed.latestRoundData();


        uint256 borrowableInUSDC = borrowable * uint256(price);

        uint8 decimals = priceFeed.decimals();

        uint256 usdcIn8decimals =  borrowableInUSDC / (10**uint256(decimals));

        // MintUSDC
        usdcToken.mint(msg.sender, usdcIn8decimals);

        // Update state.
        borrowings[msg.sender][address(usdcToken)] = usdcIn8decimals;

       
        updateOrAddBorrow(msg.sender, address(usdcToken), usdcIn8decimals);

      
        assert(borrowings[msg.sender][address(usdcToken)] == usdcIn8decimals);
        return usdcIn8decimals;
    }

    function borrowDAI(
        bytes32 msgId,
        address priceFeedAddress
    ) public returns (uint256) {
        uint256 borrowed = borrowings[msg.sender][address(daiToken)];
        require(borrowed == 0, "Caller has already borrowed DAI");

        address transferredToken = messageDetail[msgId].token;
        require(
            transferredToken != address(0),
            "Caller has not transferred this token"
        );

        uint256 deposited = deposits[msg.sender][transferredToken];
        uint256 borrowable = (deposited * 80) / 100; // 80% collaterization ratio.

        // In this example we treat BnM as though it has the same value BTC. This is because BnM tokens are dummy tokens that are not on Chainlink Pricefeeds.
        // BTC / USD on Mumbai and Sepolia
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            priceFeedAddress
        );

        (, int256 price, , , ) = priceFeed.latestRoundData();


        uint256 borrowableInDAI = borrowable * uint256(price);

        uint8 decimals = priceFeed.decimals();

        uint256 daiIn8decimals =  borrowableInDAI / (10**uint256(decimals));

        // MintDAI
        daiToken.mint(msg.sender, daiIn8decimals);

        // Update state.
        borrowings[msg.sender][address(daiToken)] = daiIn8decimals;

       updateOrAddBorrow(msg.sender, address(daiToken), daiIn8decimals);

        assert(borrowings[msg.sender][address(daiToken)] == daiIn8decimals);
        return daiIn8decimals;
    }

    // Repay the Protocol. Transfer tokens back to source chain.
    // Assumes borrower has approved this contract to burn their borrowed token.
    // Assumes borrower has approved this contract to "spend" the transferred token so it can be transferred.
    function repayAndSendMessage(
        uint256 amount,
        uint64 destinationChain,
        address receiver,
        bytes32 msgId
    ) public {
        require(
            amount >= borrowings[msg.sender][address(usdcToken)],
            "Repayment amount is less than amount borrowed"
        );

        // Get the deposit details, so it can be transferred back.
        address transferredToken = messageDetail[msgId].token;
        uint256 deposited = deposits[msg.sender][transferredToken];

        uint256 mockUSDCBal = usdcToken.balanceOf(msg.sender);
        require(
            mockUSDCBal >= amount,
            "Caller's USDC token balance insufficient for repayment"
        );

        if (
            usdcToken.allowance(msg.sender, address(this)) <
            borrowings[msg.sender][address(usdcToken)]
        ) {
            revert("Protocol allowance is less than amount borrowed");
        }

        usdcToken.burnFrom(msg.sender, mockUSDCBal);

        borrowings[msg.sender][address(usdcToken)] = 0;


      updateOrAddBorrow(msg.sender, address(usdcToken), 0);

        sendMessage(destinationChain, receiver, transferredToken, deposited);
    }

    function repayDAIAndSendMessage(
        uint256 amount,
        uint64 destinationChain,
        address receiver,
        bytes32 msgId
    ) public {
        require(
            amount >= borrowings[msg.sender][address(daiToken)],
            "Repayment amount is less than amount borrowed"
        );

        // Get the deposit details, so it can be transferred back.
        address transferredToken = messageDetail[msgId].token;
        uint256 deposited = deposits[msg.sender][transferredToken];

        uint256 mockDAIBal = daiToken.balanceOf(msg.sender);
        require(
            mockDAIBal >= amount,
            "Caller's DAI token balance insufficient for repayment"
        );

        if (
            daiToken.allowance(msg.sender, address(this)) <
            borrowings[msg.sender][address(daiToken)]
        ) {
            revert("Protocol allowance is less than amount borrowed");
        }

        daiToken.burnFrom(msg.sender, mockDAIBal);

        borrowings[msg.sender][address(daiToken)] = 0;

        
        updateOrAddBorrow(msg.sender, address(daiToken), 0);


        sendMessage(destinationChain, receiver, transferredToken, deposited);
    }

    function sendMessage(
        uint64 destinationChainSelector,
        address receiver,
        address tokenToTransfer,
        uint256 transferAmount
    ) internal returns (bytes32 messageId) {
        address borrower = msg.sender;

        // Compose the EVMTokenAmountStruct. This struct describes the tokens being transferred using CCIP.
        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);

        Client.EVMTokenAmount memory tokenAmount = Client.EVMTokenAmount({
            token: tokenToTransfer,
            amount: transferAmount
        });
        tokenAmounts[0] = tokenAmount;

        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver), // ABI-encoded receiver address
            data: abi.encode(borrower), // ABI-encoded string message
            tokenAmounts: tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 2_000_000, strict: false}) // Additional arguments, setting gas limit and non-strict sequency mode
            ),
            feeToken: address(linkToken) // Setting feeToken to LinkToken address, indicating LINK will be used for fees
        });

        // Initialize a router client instance to interact with cross-chain
        IRouterClient router = IRouterClient(this.getRouter());

        // Get the fee required to send the message
        uint256 fees = router.getFee(destinationChainSelector, evm2AnyMessage);

        // approve the Router to send LINK tokens on contract's behalf. I will spend the fees in LINK
        linkToken.approve(address(router), fees);

        require(
            IERC20(tokenToTransfer).approve(address(router), transferAmount),
            "Failed to approve router"
        );

        // Send the message through the router and store the returned message ID
        messageId = router.ccipSend(destinationChainSelector, evm2AnyMessage);

        // Emit an event with message details
        emit MessageSent(
            messageId,
            destinationChainSelector,
            receiver,
            borrower,
            tokenAmount,
            fees
        );


        uint256 updatedAmount =  deposits[borrower][tokenToTransfer] - transferAmount;
        deposits[borrower][tokenToTransfer] = updatedAmount;
       
       updateOrAddDeposit(borrower, tokenToTransfer, updatedAmount, messageId);

        // Return the message ID
        return messageId;
    }

    function getReceivedMessageDetails(
        bytes32 messageId
    )
        external
        view
        returns (uint64, address, address, address token, uint256 amount)
    {
        MessageIn memory detail = messageDetail[messageId];
        if (detail.sender == address(0)) revert MessageIdNotExist(messageId);
        return (
            detail.sourceChainSelector,
            detail.sender,
            detail.depositor,
            detail.token,
            detail.amount
        );
    }

    function getDeposits(address depositor)
        public
        view
        returns (Deposit[] memory)
    {
        return depositsList[depositor];
    }

    function getBorrowings(address borrower)
        public
        view
        returns (Borrow[] memory)
    {
        return borrowingList[borrower];
    }

    /// @notice Fallback function to allow the contract to receive Ether.
    /// @dev This function has no function body, making it a default function for receiving Ether.
    /// It is automatically called when Ether is sent to the contract without any data.
    receive() external payable {}

    /// @notice Allows the owner of the contract to withdraw all tokens of a specific ERC20 token.
    /// @dev This function reverts with a 'NothingToWithdraw' error if there are no tokens to withdraw.
    /// @param token The contract address of the ERC20 token to be withdrawn.
    function withdrawToken(address token) public onlyOwner {
        // Retrieve the balance of this contract
        uint256 amount = IERC20(token).balanceOf(address(this));
        IERC20(token).transfer(msg.sender, amount);
    }
}
