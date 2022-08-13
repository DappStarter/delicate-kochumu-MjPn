require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember hospital gloom dry forget turkey'; 
let testAccounts = [
"0xe2f7a2b26cd1840642500b48c72ad15e2b5cba13dd2bba44175bbce1082a6b48",
"0x5dca75effd298acb738ac22e03e31de3d8e25f44857a97165bdf212de8fe7cbe",
"0xf1c9faabb1d38596fe9aa227e3a6423f78890c8da91aefdc86c0bd71e277f31e",
"0xa5a3eef588a011a116f923711b7637bb0cc14b229409973165023989db340340",
"0x8a43230174be2915c23daa36496dd64538fdde2532bbcd1e3ca9e67e861ea54a",
"0x4b6c3f3964a98929e61a9734880831d51b108ca22bf52bfbe9f4c626358758fb",
"0x75c430e9f3a07333f021c23dcee275fbdd1d479ec836134c447c042e088d4751",
"0x004f68f1171247c1cc1166a22f0f6596212f4a006807219ee2b94a5bde0dd070",
"0xd040e5e36eb5c8a24048a2e4bea19013be6066887acd708114f675a4c30a74fe",
"0xcd6887e4adaf5f389e2e0e772fe9c196e606fd7a3d1e344c6ead0a1f16ca5bf1"
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

