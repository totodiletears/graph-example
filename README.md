- prep

start graph-node
start ipfs daemon

- contracts

yarn
npx hardhat compile
npx hardhat test --network hardhat
npx hardhat run scripts/deploy-counter.js

- subgraph

yarn
yarn codegen
yarn create
yarn deploy

- front-end

todo

- update

todo
