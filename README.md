# CryptoTetes ERC20 Token

## Compilation
Use Truffle to compile the contracts in [the contracts folder](./contracts):
```
npm run compile
```
This will output the compiled packages in the `./build` folder.

Beware of the Solidity compiler version that you are using.
Check the Truffle solidity compiler version with:
```
npx truffle version
```
Set the correct Solidity compiler version if needed in the [Truffle configuration](./truffle-config.js).

## Deploy the contracts locally
In order to deploy the contract locally, first we need to spin up a local Ethereum blockchain.
Use `Ganache` to deploy a local Ethereum blockchain on `http://localhost:7545`.

Once the local blockchain is up and running, deploy the contracts to it with `Truffle`:
```
npm run deploy:local
```

## Test
Test the contracts with:
```
npm test
```
