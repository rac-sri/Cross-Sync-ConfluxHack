<div align="center"><h1><strong>Cross-Sync</strong><br><h2>Connecting Blockchains</h2></h1></div>

[WIP]

![](Cross-Sync.png)

-  Two Contracts Deployed, one on Ethereum and the other on Conflux.
-  "Liquidators" can come and invest in the "pool", either in ETH or CFX token.
-  User can come and deposit the amount + some overhead charges in ETH or CFX token to the respective contract, and correspoding amount is deposited to the other blockchain at the requested address.
-  The "overhead" charges that the exchanger pays, is used to give interest to the liquidity providers on the respective blockchains.
-  The "overhead" charges are decided by ETH/CFX or CFX/ETH ratio in the pool, depending upon the direction on exchange.

---

### Installation

-  Clone the Repository
-  `npm install`
-  Follow the following script guide:

| NPM Command                     | Action                                         |
| ------------------------------- | ---------------------------------------------- |
| npm run dev                     | Start the dashboard dev server                 |
| npm run prod                    | Make the dashboard Production Build            |
| npm run server                  | Start the backend server                       |
| npm run format                  | Beutify the codebase.                          |
| npm run prod:analyzeDashboard   | Create Dashboard bundle analyze report         |
| npm run prod:visualizeDashboard | Create Dashboard bundle visualize report       |
| npm run prod:compressDashboard  | Make the Dashboard Compressed Production Build |

---

### Contract Addresses

-  **Conflux Testnet** : https://api.s0.b.hmny.io:

   -  Contract Address : 0x8d27e34c6e9462803c5ee0512307b181afe60fc9

-  **Ethereum Testnet** : Rinkeby:

   -  Contract Address : 0x0ae59be94C1dd967e2eD2F7c2cF04388f0b4C362

---

TODO:

-  UI Improvements
-  Refactoring
-  ChainLink Integration for decentralized api calls (Cross-Sync V2)
-  Reward Claim Tab
