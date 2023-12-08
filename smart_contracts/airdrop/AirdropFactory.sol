// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./AirdropToken.sol";

contract WWLAirdrop is VRFConsumerBaseV2, Ownable {

    event ReturnedRandomAddress(address randomAddress);
    event RequestSent(uint256 requestId, uint32 numAddresses);
    event RequestFulfilled(uint256 requestId, address randomAddress);
    event AirdropCompleted(address recipient, uint256 amount);

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        address randomAddress;
    }

    mapping(uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */

    VRFCoordinatorV2Interface immutable COORDINATOR;
    uint64 immutable s_subscriptionId;
    bytes32 immutable s_keyHash;
    uint32 constant CALLBACK_GAS_LIMIT = 100000;
    uint16 constant REQUEST_CONFIRMATIONS = 3;
    uint32 constant NUM_ADDRESSES = 1;

    address[] public s_randomAddresses;
    uint256 public requestId;
    address s_owner;
    uint256[] public requestIds;
    uint256 public lastRequestId;

    WWLToken public wwlToken;
    uint256 public airdropAmount;

    constructor(
        address _tokenAddress,
        uint256 _airdropAmount,
        uint64 _subscriptionId,
        address _vrfCoordinator,
        bytes32 _keyHash
    ) VRFConsumerBaseV2(_vrfCoordinator) Ownable(msg.sender) {
        COORDINATOR = VRFCoordinatorV2Interface(_vrfCoordinator);
        s_keyHash = _keyHash;
        s_owner = msg.sender;
        s_subscriptionId = _subscriptionId;

        wwlToken = WWLToken(_tokenAddress);
        airdropAmount = _airdropAmount;
    }

    modifier onlyOwnerOrAuthorized() {
        require(msg.sender == s_owner || msg.sender == address(this), "Not owner or authorized");
        _;
    }

    function setAirdropParameters(uint256 _airdropAmount) external onlyOwner {
        require(_airdropAmount > 0, "Airdrop amount must be greater than 0");
        airdropAmount = _airdropAmount;
    }

    function requestRandomAddresses(address[] memory userAddresses) external onlyOwnerOrAuthorized returns(uint256) {
        requestId = COORDINATOR.requestRandomWords(
            s_keyHash,
            s_subscriptionId,
            REQUEST_CONFIRMATIONS,
            CALLBACK_GAS_LIMIT,
            NUM_ADDRESSES
        );

        s_requests[requestId] = RequestStatus({
            randomAddress: address(0),
            exists: true,
            fulfilled: false
        });

        s_randomAddresses = userAddresses;

        requestIds.push(requestId);
        lastRequestId = requestId;
        emit RequestSent(requestId, NUM_ADDRESSES);

        return requestId;
    }

    function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords)
        internal
        override
    {
        require(s_requests[_requestId].exists, "request not found");
        s_requests[_requestId].fulfilled = true;
        
        // Select a random user address based on the random word
        uint256 index = _randomWords[0] % s_randomAddresses.length;
        address randomAddress = s_randomAddresses[index];

        s_requests[_requestId].randomAddress = randomAddress;
        emit RequestFulfilled(_requestId, randomAddress);

        // Airdrop tokens to the selected random address
        distributeAirdrop(randomAddress);
    }

    function distributeAirdrop(address _recipient) internal {
    require(airdropAmount > 0, "Airdrop amount must be greater than 0");
    require(wwlToken.balanceOf(address(this)) >= airdropAmount, "Insufficient balance for airdrop");

    wwlToken.issueToken(_recipient, airdropAmount);
    emit AirdropCompleted(_recipient, airdropAmount);
}

    function getRequestStatus(uint256 _requestId)
        external
        view
        returns (bool fulfilled, address randomAddress)
    {
        require(s_requests[_requestId].exists, "request not found");
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomAddress);
    }
}
