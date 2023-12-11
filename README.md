## Inspiration
World Wide Link is a Cross-Chain DeFi Hub powered by CCIP, providing access to various financial tools to facilitate any transaction, including integration with protocols of different blockchains, all in one place. 

** WWL Provides: 1) Multipurpose Escrow 2) Lending and Borrowing 3) SOS Alerts based automatic fund transfer 4) Cross-Chain liquid staking 5) On/Off Ramp 6) Token Transfer 

## Chainlink, Avalanche, Polygon, and The Graph integration details: 
Chainlink: We have used different Chainlink products including 1) CCIP 2) Chain Automation 3) Data Feeds 4) VRF 5) Proof of Reserves 6) Functions 7) Chainlink Node-External adapter. Below are the details of the integration:

Avalanche | Polygon: We built a Cross-Chain Defi hub that enables defi transactions between Avalanche, Polygon, and Ethereum for various use cases such as Escrow, Liquid Staking, Lend/Borrow 

The Graph: Created a subgraph to retrieve user transactions from cross-chain lending/borrowing contracts and rewarded them with an airdrop of WWL tokens. 
## Sub Graph - The Graph  : https://api.studio.thegraph.com/query/44401/wwl/0.0.1

![WWL Pitch - Logo change](https://github.com/jaydippatel83/worldwidelink/assets/54347081/fbd27818-c36c-440c-8813-f1ba8dfc8d44)

## Integration details for Chainlink, Avalanche | Polygon and The Graph.


**In WorldWideLink (WWL)  we have used different Chainlink products including 1) CCIP 2) Chain Automation 3) Data Feeds 4) VRF 5) Proof of Reserves 6) Functions 7) Chainlink Node-External adapter. Below are the details of the integration:**

| Service Name                                                                                                                                                                                               | Blockchain \| Contract \| Code implementation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **CCIP<br>Using CCIP we Implemented, Cross-Chain Escrow,<br>Lending / Borrowing, Liquid Staking and asset transfer among Ethereum/Avalnche/ Polygon.**                                                         | **Avalanche** -<br>**(Escrow)**<br>https://testnet.snowtrace.io/address/0x52C1da029735C798Ef0B94ba85C2C30ef378D5f4<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/escrow/Escrow.sol<br><br>Line No: 1 to 726<br><br>**(Lending/Borrowing)**<br>**Sender:**<br>https://testnet.snowtrace.io/address/0xD9902C09d1104f068772623F91dC9555545192dd<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/lending-borrowing/Sender.sol<br><br>Line No: 1 - 260<br><br>**Receiver Protocol:** https://testnet.snowtrace.io/address/0x2123e642A12d6Ce9B292B9F166971DFa97319b2D<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/lending-borrowing/WorldWideLinkProtocol.sol<br><br>Line No: 1 - 474<br><br>**(Liquid staking)**<br>**Staking:** <br>https://testnet.snowtrace.io/address/0x670936746cF7ab5Eec356e81E9a62556140CDfB5<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/Liquid-Stake/LiquidStaking.sol<br><br>Line No: 1 - 185<br><br>**Unstake:**<br>https://testnet.snowtrace.io/address/0xC3ED8D3Ddef66cea43e9D3d74981869aE2C8718F<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/Liquid-Stake/UnStake.sol<br><br>Line No: 1 - 204<br><br>**Sepolia** -<br>**(Escrow)**<br>https://sepolia.etherscan.io/address/0xbb5fd7e998526c64F8CBa3C3Cc526E510Dd6BdC4<br><br>**(Lending/Borrowing)**<br>**Sender:**  <br>https://sepolia.etherscan.io/address/0x53cc33bCb8f54BD041210Be871b7b3FAF3884ac2<br><br>**Receiver Protocol:** <br>https://sepolia.etherscan.io/address/0x67179faFCB5Fbf8F106DaFFA3fb70e1369c1Fc3f<br><br>**(Liquid staking)**<br><br>**(Asset Transfer)**<br>https://sepolia.etherscan.io/address/0x253b3b4807076Cf51c3Cda5Ebd5DA290DdD89f13<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/transfer/Transfer.sol<br><br>**Mumbai** -<br>**(Escrow)**<br>https://mumbai.polygonscan.com/address/0x9519db24fE1FfB1Be531D4c66eA01Eb61B51F82a<br><br>**(Lending/Borrowing)**<br>**Sender:**  <br>https://mumbai.polygonscan.com/address/0x3Db45de715929b76E0570d01815F20eEe576B9E7<br><br>**Receiver Protocol:** <br>https://mumbai.polygonscan.com/address/0x9c29a12d441757AcF45aa106A3905E85C008dFA2<br><br>**(Liquid staking)**<br><br>**(Asset Transfer)**<br>https://mumbai.polygonscan.com/address/0xFf72875645e3a6DFAc819a14a98c93b01D3f449B |
| **Automation<br>logic-based automation in 1) Automated SOS email and 2) SOS-triggered automated crypto asset transfers.<br>Note: Detailed information for implementation is covered in the next section.**<br> | <br>**Mumbai**<br>**(Sos Alert)**<br>https://mumbai.polygonscan.com/address/0xdC1A55051B529e23B67f621332a0D0953771c3Fc<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/sos-alert-contracts/SosTokenTransfer.sol<br><br>Line No: 1 to 131                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Data Feeds To fetch real-time Ethereum and Matic prices, enabling users to peg 1 CCIP to 1 Eth on Ethereum and 1 CCIP to 1 Matic on Polygon for lending/borrowing.**                                                                                                                                                                                                | **Avalanche**<br>https://testnet.snowtrace.io/address/0x040Dd256A46e8fFdD5Ffeb6F95FE9b5c02828D88<br><br>**Sepolia**<br>https://sepolia.etherscan.io/address/0xd1B48c231eE234C89BC02E6E7C80F75115DFD04D<br><br>**Mumbai**<br>https://mumbai.polygonscan.com/address/0x6e4563C4F0FE668196C8878Cb89bdEF15b66e9B2<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/price_feed/Price_feed.sol<br><br>Line No: 1 - 57<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/lending-borrowing/WorldWideLinkProtocol.sol<br><br>Line No: 209 - 230                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **VRF (Airdrop) To airdrop WWL tokens to an early user who interacted with any of the contracts from Escrow, Lend/Borrow, and Liquid Staking**                                                                                                                                                                                               | **Avalanche**<br>https://testnet.snowtrace.io/address/0xA7a9cB2a4b88a5C85431808F6a3292b35d3dF337<br><br>**Sepolia**<br>https://sepolia.etherscan.io/address/0x2998C45406341386a5c25d523c7A500841b3E307<br><br>**Code**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/airdrop/AirdropFactory.sol<br><br>Line No: 1 - 126                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Proof of Reserve Monitoring BTC.b's PoR triggers alerts and maintains on-chain reputation by tracking Avalanche's collateral ratio. Users receive email alerts for low ratios, and frequent imbalances reduce the pool's reputation.**                                                                                                                                                              | **Avalanche**<br>**(Proof of Reserve)**<br>https://testnet.snowtrace.io/address/0xe28F1cfe684e907fdb9cC815b50a5dBF5350d007<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/sos-alert-contracts/ProofOfReserve.sol<br><br>Line No: 1 - 105                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Functions We attempted using functions for email notifications via a POST API but faced a "custom error" when calling the function consumer contract. To resolve, we implemented the desired functionality through a Chainlink Node.**                                                                                                                                                                                                 | **Mumbai**<br>https://mumbai.polygonscan.com/address/0x6Cf0473b429fE9919a6443D9fFF2c6A1aC897A5e<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/sos-alert-contracts/FunctionsConsumerExample.sol<br><br>Line No: 1 - 112                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Node-External Adapter We created an external adapter, bridged it with the node, and generated a job ID for the POST API of email and automated it as per Chainlink Automation - Keeper.**                                                                                                                                                                                       | **Mumbai(External Request)**<br>https://mumbai.polygonscan.com/address/0x403227Ba96250eaD0f12ba77951d7f65F9E5962d<br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/sos-alert-contracts/ExternalRequestContract.sol<br><br>Line No: 1 - 122<br><br>https://github.com/mansijoshi17/cl-external-adapter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **The GraphCreated a subgraph to retrieve user transactions from cross-chain lending/borrowing contracts and rewarded them with an airdrop of WWL tokens.**                                              | **Sub Graph:** <br>https://api.studio.thegraph.com/query/44401/wwl/0.0.1 <br><br>**Code:**<br>https://github.com/jaydippatel83/worldwidelink/blob/master/src/jsx/components/Dashboard/widgets/Airdrop.js<br><br>Line No: 15 to 30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |











## Implementation Details: 

**Chainlink CCIP:**

**- Cross-Chain Escrow** allows buyers and sellers to stake crypto assets in Ethereum, Avalanche, or Polygon without the need to have assets on the same chain as the other party.<br>
**- Cross-Chain Lending and Borrowing** allow users to lend assets on Avalanche, Ethereum, or Polygon. Users can borrow assets on other chains based on the collateral ratio, eliminating the need for bridges or concerns about managing native gas tokens.<br>
**- Cross-Chain Liquid Staking** enables users to stake assets, such as CCIP, on Avalanche Fuji and receive StCCIP on Polygon. Users can utilize their liquid assets for various DeFi use cases.<br>
**- Cross-Chain asset transfer** between CCIP supported chains: Ethereum, Avalanche, or Polygon.


**Chainlink Automation:**

- We have used logic-based automation in 1) Automated SOS email and 2) SOS-triggered automated crypto asset transfers.
Chainlink Automation in WWL involves logic-based alerts and transfers. Trigger 2 sends email alerts to specified loved ones if no Dapp interaction within days. Triggers 3 auto-transfer assets to loved ones' addresses if no WWL activity after user-configured time, preventing crypto wealth from being locked for a lifetime in case of emergencies.


**Chainlink Data Feeds:**
- Currently, CCIP supports only CCIP token so we have used price feeds in the Lending / Borrowing part of Dapp to fetch a price of Ethereum and Matic and peg 1 CCIP:1 Eth in Ethereum network and 1 CCIP: 1 Matic in the Polygon network and allow the user to borrow WDai accordingly supplied collateral of CCIP.


**Chainlink VRF:**
- To airdrop WWL tokens to an early user who interacted with any of the contracts from Escrow, Lend/Borrow, and Liquid Staking. 


**Chainlink Proof of Reserves:**
- We monitor PoR for BTC.b to trigger vital alerts and maintain the on-chain reputation score by fetching the collateral ratio of Bitcoin on Avalanche. Users receive email alerts if the collateral ratio falls below the predefined percentage. Frequent imbalances lower the reputation score of the specific pool.


**Chainlink Functions:**
- We tried to utilize functions to implement notifications through a POST API for sending emails. However, we encountered a "custom error" when calling the function consumer contract. To address this issue, we created a Chainlink Node to implement the desired functionality.


**Chainlink Node - External Adapter:**
- We created an external adapter, bridged it with the node, and generated a job ID for the POST API of email and automated it as per Chainlink Automation - Keeper. 


<img width="1422" alt="Screenshot 2023-12-08 at 5 42 14 PM" src="https://github.com/jaydippatel83/worldwidelink/assets/54347081/c0384693-146a-49cc-adf7-2eb769081440">


<img width="1440" alt="Screenshot 2023-12-08 at 12 21 35 PM" src="https://github.com/jaydippatel83/worldwidelink/assets/54347081/e500d1d8-837f-4990-b854-c287962fda46"> 
 
![Pwered By](https://github.com/jaydippatel83/worldwidelink/assets/54347081/06814432-36f3-4ef5-b712-78fe01c94236)

## What it does
⚖️ Multipurpose Escrow: Multipurpose Cross-Chain escrow agreement ensures ethical behavior in decentralized transactions between two parties. In WWL, both parties stake tokens, offering dispute resolution through a DAO arbitrator. 

🔄 Lending and Borrowing: CCIP-powered Cross-Chain Lending and Borrowing: Seamlessly support Ethereum, Polygon, and Avalanche through the WWL, eliminating the need for bridging or native gas tokens. 

🚨SOS Alerts based automatic fund transfer: Millions locked on the chain may be inaccessible in emergencies. With WWL SOS Alerts, set triggers: if inactive, Trigger 1 sends an email via Chainlink Keeper; if still inactive, Trigger 2 alerts loved ones and transfers funds. 

💼 Liquid Staking: Cross-chain liquid staking aggregator that enables users to provide liquidity across different protocols on various blockchains, all on one platform. 

💸 On/Off-Ramp Integration: WWL offers integration with the Transak SDK to simplify the process for users to on and off-ramp crypto to WWL. 

🔄 Token Transfer: Users can seamlessly transfer tokens across different blockchains within the Dapp, eliminating the need for bridging, managing native tokens for gas fees, or handling multiple wallets. 

🎉 Airdrop: Created a subgraph to retrieve user transactions from cross-chain lending/borrowing contracts and rewarded them with an airdrop of WWL tokens. 

## Challenges we ran into
🚧 We tried to utilize functions to implement notifications through a POST API for sending emails. However, we encountered a "custom error" when calling the function consumer contract. To address this issue, we created a Chainlink Node to implement the desired functionality 🛠️

## Things we learned 
💡This marks our first foray into building a product with a cross-chain-first approach. The development of WWL was greatly facilitated by referencing Chainlink's documentation, along with insights gained from video sessions at Smartcon and expert discussions during the hackathon. This process helped us comprehend the "Why, What, and How" behind CCIP and other Chainlink services.

## What's Next for WorldWideLink
The cross-chain approach opens up new doors for the growth of the DeFi space. We can't imagine a world where we can only connect with users on the same cellular network that we use. Similarly, at this early stage, WorldWideLink has huge potential to build solutions in the DeFi space on top of CCIP, providing an easy and secure way to develop cross-chain compatible products.


🚀 We aspire to continue building worldwidelink.xyz, and it would be invaluable to receive guidance on developing a product with regulatory market fit without compromising user privacy and data protection. 🔒
 

## Avalanche -
**(Escrow)**
https://testnet.snowtrace.io/address/0x52C1da029735C798Ef0B94ba85C2C30ef378D5f4

Code:
https://github.com/jaydippatel83/worldwidelink/blob/master/smart_contracts/escrow/Escrow.sol

Line No: 1 to 726

**(Data Feeds)**
https://testnet.snowtrace.io/address/0x040Dd256A46e8fFdD5Ffeb6F95FE9b5c02828D88

**(Chainlink VRF)**
https://testnet.snowtrace.io/address/0xA7a9cB2a4b88a5C85431808F6a3292b35d3dF337

For more details about Avalanche - **https://github.com/jaydippatel83/worldwidelink/blob/master/chainlink.md**

## To get more details about chainlink implementation check - https://github.com/jaydippatel83/worldwidelink/blob/master/chainlink.md
