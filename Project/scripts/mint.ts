import { Contract, ethers } from "ethers"; // Hardhat for testing
import "dotenv/config";
import * as tokenJson from "../artifacts/contracts/Token.sol/MyToken.json";
import { MyToken } from "../typechain";

// This key is already public on Herong's Tutorial Examples - v1.03, by Dr. Herong Yang
// Do never expose your keys like this

// DEPLOYS TO GOERLI, NOT HARDHAT SIM!!

const DEFAULT_VOTING_POWER = 10;

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}
async function checkBalance(signer: ethers.Wallet) {
  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));
  console.log(`Wallet balance ${balance}`);
  if (balance < 0.01) {
    console.log("INSUFFICIENT ETH BALANCE");
    return false;
  }
  return true;
}
async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);
  const provider = ethers.providers.getDefaultProvider("goerli");
  const signer = wallet.connect(provider);
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
