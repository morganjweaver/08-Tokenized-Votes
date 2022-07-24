import { ethers } from "ethers"; // Hardhat for testing
import "dotenv/config";
import * as tokenJson from "../artifacts/contracts/Token.sol/MyToken.json";
import { checkBalance, getSigner } from "../helpers/utils";

async function main() {
  const signer = getSigner();
  console.log("Deploying token");
  if (!checkBalance(signer)) {
    return;
  }
  const tokenFactory = new ethers.ContractFactory(
    tokenJson.abi,
    tokenJson.bytecode,
    signer
  );
  const tokenContract = await tokenFactory.deploy();
  console.log("Awaiting confirmations");
  await tokenContract.deployed();
  console.log("Completed");
  console.log(`Token contract deployed at ${tokenContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
