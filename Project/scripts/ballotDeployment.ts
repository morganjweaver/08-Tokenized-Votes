import { ethers } from "ethers"; // Hardhat for testing
import "dotenv/config";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import { getSigner, checkBalance, convertStringArrayToBytes32 } from "../helpers/utils";

async function main() {
  const signer = getSigner();
  const inputArgs = process.argv.slice(2);
  console.log(`INPUT ARGS: ${inputArgs}`);
  const tokenContractAddress = inputArgs[0];
  const proposals = inputArgs.slice(1);
  console.log("Proposals: ");
  console.log(`${proposals}`);
  if (proposals.length < 2) throw new Error("Not enough proposals provided");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  // BALLOT CONTRACT
  if (!checkBalance(signer)) {
    return;
  }
  console.log("Deploying Ballot contract");
  const ballotFactory = new ethers.ContractFactory(
    ballotJson.abi,
    ballotJson.bytecode,
    signer
  );
  const ballotContract = await ballotFactory.deploy(
    convertStringArrayToBytes32(proposals),
    tokenContractAddress
  );
  console.log("Awaiting confirmations");
  await ballotContract.deployed();
  console.log("Completed");
  console.log(`Ballot contract deployed at ${ballotContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
