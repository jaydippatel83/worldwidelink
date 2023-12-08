## Inspiration
World Wide Link is a Cross-Chain DeFi Hub powered by CCIP, providing access to various financial tools to facilitate any transaction, including integration with protocols of different blockchains, all in one place. 

** WWL Provides: 1) Multipurpose Escrow 2) Lending and Borrowing 3) SOS Alerts based automatic fund transfer 4) Cross-Chain liquid staking 5) On/Off Ramp 6) Token Transfer 

## Chainlink, Avalanche, Polygon, and The Graph integration details: 
Chainlink: We have used different Chainlink products including 1) CCIP 2) Chain Automation 3) Data Feeds 4) VRF 5) Proof of Reserves 6) Functions 7) Chainlink Node-External adapter. Below are the details of the integration:

Avalanche | Polygon: We built a Cross-Chain Defi hub that enables defi transactions between Avalanche, Polygon, and Ethereum for various use cases such as Escrow, Liquid Staking, Lend/Borrow 

The Graph: Created a subgraph to retrieve user transactions from cross-chain lending/borrowing contracts and rewarded them with an airdrop of WWL tokens. 

![WWL Pitch - Logo change](https://github.com/jaydippatel83/worldwidelink/assets/54347081/fbd27818-c36c-440c-8813-f1ba8dfc8d44)

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
