import { Contract, ethers } from "ethers";
import "dotenv/config";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import { CustomBallot } from "../typechain";

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function checkBalance(signer: ethers.Wallet): Promise<boolean> {
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

    const provider = ethers.providers.getDefaultProvider("goerli");
    const signer = wallet.connect(provider);

    const hasSufficientBalance = await checkBalance(signer);
    if (!hasSufficientBalance) {
      return;
    };

    if (process.argv.length < 3) 
      throw new Error("Ballot address missing");
    
    if (process.argv.length < 4) 
      throw new Error("Proposal number is missing");
      
    if (process.argv.length < 5) 
      throw new Error("Vote amount is missing");

    const ballotAddress = process.argv[2];      
    const proposalNum = process.argv[3];
    const voteAmount = process.argv[4];
    
    console.log(`Attaching Ballot contract interface to address ${ballotAddress}`);
    const ballotContract: CustomBallot = new Contract(
      ballotAddress,
      ballotJson.abi,
      signer
    ) as CustomBallot;

    const votingPower = Number(await ballotContract.votingPower());
    if (votingPower < Number(voteAmount)) 
      throw new Error("Caller cannot vote, not enough voting power!");

    const tx = await ballotContract.vote(proposalNum, voteAmount);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});