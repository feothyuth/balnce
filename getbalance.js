async function getEthBalance(address) {
    try {
        // Assuming web3 is already initialized and connected to a provider
        const balanceWei = await web3.eth.getBalance(address);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        return balanceEth;
    } catch (error) {
        console.error("Error fetching balance:", error);
        return null;
    }
}

// Example usage
async function run() {
    const address = '0xYourEthereumAddressHere';
    const balance = await getEthBalance(address);
    if (balance !== null) {
        console.log(`The balance of ${address} is ${balance} ETH.`);
    }
}

run();
