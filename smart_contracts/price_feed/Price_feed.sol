// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract MultiDataConsumerV3 {
    AggregatorV3Interface internal btcUsdFeed;
    AggregatorV3Interface internal daiUsdFeed;
    AggregatorV3Interface internal ethUsdFeed;
    AggregatorV3Interface internal linkUsdFeed;
    AggregatorV3Interface internal linkEthFeed;
    AggregatorV3Interface internal usdcUsdFeed;
    AggregatorV3Interface internal btcEthFeed;

    constructor() {
        btcUsdFeed = AggregatorV3Interface(
            0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
        );
        daiUsdFeed = AggregatorV3Interface(
            0x14866185B1962B63C3Ea9E03Bc1da838bab34C19
        );
        ethUsdFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        linkUsdFeed = AggregatorV3Interface(
            0xc59E3633BAAC79493d908e63626716e204A45EdF
        );
        linkEthFeed = AggregatorV3Interface(
            0x42585eD362B3f1BCa95c640FdFf35Ef899212734
        );
        usdcUsdFeed = AggregatorV3Interface(
            0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E
        );
        btcEthFeed = AggregatorV3Interface(
            0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22
        );
    }

    function getLatestAnswers() public view returns (int[] memory) {
        int[] memory answers = new int[](7);
        answers[0] = getLatestAnswer(btcUsdFeed);
        answers[1] = getLatestAnswer(daiUsdFeed);
        answers[2] = getLatestAnswer(ethUsdFeed);
        answers[3] = getLatestAnswer(linkUsdFeed);
        answers[4] = getLatestAnswer(linkEthFeed);
        answers[5] = getLatestAnswer(usdcUsdFeed);
        answers[6] = getLatestAnswer(btcEthFeed);
        return answers;
    }

    function getLatestAnswer(
        AggregatorV3Interface feed
    ) internal view returns (int) {
        (, int answer, , , ) = feed.latestRoundData();
        return answer;
    }
}
