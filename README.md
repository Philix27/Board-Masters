[![banner](./assets/landing.jpg)](https://youtu.be/oDCC7BvNqdI)

# Board Masters
This is a simple multiplayer chess game.

### Problems
- Challenges of paying bills and buying digital assets using cryptocurrencies.

### Solution
- Provide aa easy way to purchase airtime and data plans for friends and family
- Pay for utility such as light, GoTv, MyTv subscription using cUSD.


## Features and Roadmap
    [] Multiplayer
    [] Stake matches using cryptocurrencies
    [] Invite friends
    [] Play with AI

## Structure of Repository

This project uses Turbo-repo for management of the various apps and packages. 
- Apps
  - mini: which is also the frontend application. 
  - ws: websocket server running on socket.io
  - server: http server for handling non-websocket request to the backend
- Packages
  - rpc: where the core backend logic takes place. 
    - service: core logic of the app
    - rpc: exposes endpoints to the frontend
    - repository layer: communicates with the database
  - ui: major frontend reusable components
  - eslint
  - tailwind-config
  - typescript-config
- Foundary
  - The smart contract

## Technology used
Frontend: Next.js, Tailwind, Wagmi, Ethers.js, Socket.io-client, WalletConnect
Backend: Express.js, Hono.js, Socket.io, Ethers.js
Smart Contract: Foundary

#### Run locally
- Clone the repository from github
- cd in the folder
- Run `pnpm install` to install all packages
- Run `pnpm run dev:mini` to run the frontend server
- Run `pnpm run dev:server` to run the backend Hono.js server
- Run `pnpm run dev:ws` to run the websocket server

## Links
- [Live Demo](https://www.youtube.com/)
- [Video Walk through](https://www.youtube.com/)
- [Github](https://www.youtube.com/)



