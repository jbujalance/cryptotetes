# CryptoTetes ERC20 Token
CryptoTetes is a dummy, useless, experimental ERC20 token that I made to learn how the Ethereum network works and how
dapps on this blockchain are made.

## Environment variables
See [.env.example file](./.env.example) to see the environment variables that need to be populated.
* `API_URL`: The URL of the network connection to ethereum through a provider like Alchemy.
* `MNEMONIC`: The wallet seed-phrase of the account that is used to deploy the contract to the configured network.

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

## Deployment
### Local deployment
In order to deploy the contract locally, first we need to spin up a local Ethereum blockchain.
Use `Ganache` to deploy a local Ethereum blockchain on `http://localhost:7545`.

Once the local blockchain is up and running, deploy the contracts to it with `Truffle`:
```
npm run deploy:local
```

### Ropsten deployment
In order to deploy the contract on the Ropsten Ethereum testnet, we must provide the API URL and the deployer wallet menmonic in the environment variables.
To deploy in the Ropsten network run:
```
npm run deploy:ropsten
```

## Test
Test the contracts with:
```
npm test
```
