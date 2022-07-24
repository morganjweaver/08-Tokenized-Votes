import { Contract, ethers } from "ethers";
import "dotenv/config";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
// eslint-disable-next-line node/no-missing-import
import { CustomBallot } from "../typechain";
import { BigNumber } from "ethers";

// This key is already public on Herong's Tutorial Examples - v1.03, by Dr. Herong Yang
// Do never expose your keys like this

// DEPLOYS TO GOERLI, NOT HARDHAT SIM!!

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);
  const provider = ethers.providers.getDefaultProvider("goerli");
  const signer = wallet.connect(provider);
  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));
  console.log(`Wallet balance ${balance}`);
  if (process.argv.length < 3) throw new Error("Ballot address missing");
  const ballotAddress = process.argv[2];

  const ballotContract: CustomBallot = new Contract(
    ballotAddress,
    ballotJson.abi,
    signer
  ) as CustomBallot;

  console.log("Proposals: ");
  // let numProposals: BigNumber;
  const numProposals = await ballotContract.getProposalsLength();
  console.log(`Length of proposals: ${numProposals.toString()}`);
  for (let i = 0; i < numProposals.toNumber(); i++) {
    var proposal = ethers.utils.parseBytes32String(
      (await ballotContract.proposals(i)).name
    );
    console.log(`Proposal N. ${i + 1}: ${proposal}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
