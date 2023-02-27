const {ethers} = require("hardhat");

async function main() {
    const donationDappContract = await ethers.getContractFactory("Chai");
    const deployedDonationDappContract = await donationDappContract.deploy();
    await deployedDonationDappContract.deployed();

    console.log("Donation Dapp contract address : ",deployedDonationDappContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(()=>process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
