import { Contract, ethers } from "ethers";
import "dotenv/config";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import { CustomBallot } from "../typechain";
import { checkBalance, getSigner } from "../helpers/utils";

async function main() { 
  const signer = getSigner();

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