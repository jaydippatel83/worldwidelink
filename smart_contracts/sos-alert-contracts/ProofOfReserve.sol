// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
    A sample smart contract demostrating the use of Chainlink Proof-of-Reserves functionality.
 */
contract SampleDeFiContract {
    AggregatorV3Interface internal proofOfReserveContract;
    IERC20 internal btcbContract;

    uint256 public creditScore = 100;

    mapping(address => uint256) private _poolBalances;
    event Deposit(address indexed from, uint256 value);
    event Withdrawal(address indexed to, uint256 value);

    constructor() {
        // BTC.b PoR address on Fuji testnet.
        // Full list of Chainlink feeds on Fuji available here: https://docs.chain.link/docs/data-feeds/price-feeds/addresses/?network=avalanche#Avalanche%20Testnet
        proofOfReserveContract = AggregatorV3Interface(0xa284e0aCB9a5F46CE7884D9929Fa573Ff842d7b3);

        // The BTC.b contract address on Fuji testnet.
        btcbContract = IERC20(0x0f2071079315Ba5a1c6d5b532a01a132c157AC83);
    }

    /**
        Returns the current BTC.b supply, and current BTC collateral amount, as reported by Chainlink PoR.
     */
    function getCollateralAmounts() public view returns (uint256, int256) {
        // Get the token supply from the ERC20 contract.
        uint256 totalSupply = btcbContract.totalSupply();

        // Get the collateral amount for the Chainlink PoR feed.
        (uint80 roundId, int256 collateralAmount, , , uint80 answeredInRound) = proofOfReserveContract.latestRoundData();
        require(roundId == answeredInRound, "Stale proof-of-reserves answer.");

        return (totalSupply, collateralAmount);
    }

    function getCreditScore(uint256 percentage) public returns (uint256){
        (uint256 totalSupply, int256 collateralAmount) = getCollateralAmounts();
         uint256 remainedCollateralAmount = totalSupply - (totalSupply * percentage / 100 );
         if(collateralAmount < int256(remainedCollateralAmount)){
            creditScore -= creditScore;
         }
         return creditScore;
    }

    /**
        Returns true if and only if the BTC.b token supply is fully backed by native Bitcoin.
     */
    function isFullyCollateralized() public view returns (bool) {
        // Get the token supply and collateral amount, and check that the supply is not greater than the collateral.
        (uint256 totalSupply, int256 collateralAmount) = getCollateralAmounts();
        if (collateralAmount < 0) {
            return false;
        }

        return totalSupply <= uint256(collateralAmount);
    }

    /**
        Mocking functionality of depositing into a DeFi pool.
        Only allowed when bridged asset is fully backed.
        Emits a Deposit event in the success case.
     */
    function depositIntoPool(uint256 amount) public returns (bool) {
        // Check that the BTC.b asset is fully collateralized.
        require(isFullyCollateralized(), "Pools paused while asset under collateralized.");

        // Transfer the tokens into the control of this contract and account for the new balances.
        require(btcbContract.transferFrom(msg.sender, address(this), amount));
        _poolBalances[msg.sender] += amount;

        // Emit the deposit event.
        emit Deposit(msg.sender, amount);

        return true;
    }

    /**
        Mocking functionality of withdrawing from a DeFi pool.
        Only allowed when bridged asset is fully backed.
        Emits a Withdrawal event in the success case.
     */
    function withdrawFromPool(uint256 amount) public returns (bool) {
        // Check that the BTC.b asset is fully collateralized.
        require(isFullyCollateralized(), "Pools paused while asset under collateralized.");

        // Check the address has sufficient balance to withdraw.
        require(_poolBalances[msg.sender] >= amount, "Withdrawal amount exceeds balance.");

        // Deduct the amount from the address balance first (protect against reentrance), then transfer the amount to them.
        _poolBalances[msg.sender] -= amount;
        btcbContract.transfer(msg.sender, amount);

        // Emit the withdrawal event.
        emit Withdrawal(msg.sender, amount);

        return true;
    }
}