import { Contract, ethers } from "ethers"; // Hardhat for testing
import "dotenv/config";
import * as tokenJson from "../artifacts/contracts/Token.sol/MyToken.json";
import { MyToken } from "../typechain";
import { checkBalance, getSigner } from "../helpers/utils";

async function main() {
  const signer = getSigner();
  if (!checkBalance(signer)) {
    return;
  }
  if (process.argv.length < 3) throw new Error("Token address missing");
  const tokenAddress = process.argv[2];
  if (process.argv.length < 4) throw new Error("Delegatee address missing");
  const delegateeAddress = process.argv[3];

  console.log(`Attaching token contract interface to address ${tokenAddress}`);
  const tokenContract: MyToken = new Contract(
    tokenAddress,
    tokenJson.abi,
    signer
  ) as MyToken;

  console.log(`Delegate votes to ${delegateeAddress}`);
  const tx = await tokenContract.delegate(delegateeAddress);
  console.log("Awaiting confirmations");
  await tx.wait();
  console.log(`Transaction completed. Hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
