import { Contract, ethers, Wallet } from "ethers";
import { CustomBallot } from "../typechain";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";
import { getSigner } from "../helpers/utils";

async function main() {
  const signer = getSigner();

  if (process.argv.length < 3)
    throw new Error("Ballot address is missing");

  const ballotAddress = process.argv[2];

  const ballotContract: CustomBallot = new Contract(
    ballotAddress,
    ballotJson.abi,
    signer
  ) as CustomBallot;

  const winnerName = ethers.utils.parseBytes32String(await ballotContract.winnerName());
  console.log(`Winning proposal is ${winnerName}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
