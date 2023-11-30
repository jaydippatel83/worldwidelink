async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Replace the following with the actual addresses of your Router and Link contracts
  const routerAddressSepoliya = "0xD0daae2231E9CB96b94C8512223533293C3693Bf";
  const linkAddressSepoliya = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
  const routerAddressMumbai = "0x70499c328e1E2a3c41108bd3730F6670a44595D1";
  const linkAddressMumbai = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

  const TokenTransferor = await ethers.getContractFactory("TokenTransferor");
  const tokenTransferorSepoliya = await TokenTransferor.deploy(routerAddressSepoliya, linkAddressSepoliya);
  const tokenTransferorMumbai = await TokenTransferor.deploy(routerAddressMumbai, linkAddressMumbai);

  console.log("TokenTransferor deployed to sepoliya:", tokenTransferorSepoliya.target);
  console.log("TokenTransferor deployed to mumbai:", tokenTransferorMumbai.target);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //Token Address sepoliya: 0x253b3b4807076Cf51c3Cda5Ebd5DA290DdD89f13
  //Token Address Mumbai: 0xFf72875645e3a6DFAc819a14a98c93b01D3f449B