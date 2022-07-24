import { Contract, ethers } from "ethers"; // Hardhat for testing
import "dotenv/config";
import * as tokenJson from "../artifacts/contracts/Token.sol/MyToken.json";
import { MyToken } from "../typechain";
import { checkBalance, getSigner } from "../helpers/utils";

const DEFAULT_VOTING_POWER = 10;

async function main() {
  const signer = getSigner();
  if (!checkBalance(signer)) {
    return;
  }
  if (process.argv.length < 3) throw new Error("Token address missing");
  const tokenAddress = process.argv[2];
  if (process.argv.length < 4) throw new Error("Voter address missing");
  const voterAddress = process.argv[3];

  let amount;
  if (process.argv.length < 5) {
    console.log(
      "Amount is missing, setting it to default value: ${DEFAULT_VOTING_POWER}"
    );
    amount = DEFAULT_VOTING_POWER;
  } else {
    amount = process.argv[4];
  }
  console.log(`Attaching token contract interface to address ${tokenAddress}`);
  const tokenContract: MyToken = new Contract(
    tokenAddress,
    tokenJson.abi,
    signer
  ) as MyToken;

  console.log(`Giving ${amount} votes to ${voterAddress}`);
  const tx = await tokenContract.mint(
    voterAddress,
    ethers.utils.parseEther(amount.toString())
  );
  console.log("Awaiting confirmations");
  await tx.wait();
  console.log(`Transaction completed. Hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
