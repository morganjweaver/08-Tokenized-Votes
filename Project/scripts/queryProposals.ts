import { Contract, ethers } from "ethers";
import "dotenv/config";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
// eslint-disable-next-line node/no-missing-import
import { CustomBallot } from "../typechain";
import { getSigner } from "../helpers/utils";

async function main() {
  const signer = getSigner();
  if (process.argv.length < 3) throw new Error("Ballot address missing");
  const ballotAddress = process.argv[2];

  const ballotContract: CustomBallot = new Contract(
    ballotAddress,
    ballotJson.abi,
    signer
  ) as CustomBallot;

  console.log("Proposals: ");
  const numProposals = 5;
  for (let i = 0; i < numProposals; i++) {
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
