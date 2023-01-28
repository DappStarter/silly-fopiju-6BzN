require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool dash script coil inside light army gauge'; 
let testAccounts = [
"0x175bcecde3c716206a562b41f9fb8a80c90616d3eee8c1902e9de3cab56e5149",
"0x9be67dc0f2770abcefb466e03820ec3bdff992b9c36ccf31da9799d963e0bcca",
"0x9071b43b09b2ac0cb028357c568445728f9a7f95a16276cc8cfd91ab1467f701",
"0x5d3a6b1d92925fcfecfe5677ea7de9173e1954c86ca9757d99d4d03cdd285a9d",
"0x8468533108e35297b8fcfd963acf54b9882e60fd3728a699f24930d00912649b",
"0x0ed679be9f586422b0b33551cbe90e91142048ce73203663ad7a2a78f3c5b8f3",
"0x4489078e315f05378de74e17dd13c2068d0833236716c905a2aa0002e7b235c3",
"0x5ea8f0181db0585002aab0d67fe419381188b4be8f866714fbd6a72caf25b9a1",
"0xa667e3459d5cc3a663542dab809e4e99e2b5f89d103d5f4bf1203db271b6608a",
"0xe5d86e2beb8f75e60a21e60d43f30f077d2a2e47fac8bd707c2d61aff2d6c571"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

