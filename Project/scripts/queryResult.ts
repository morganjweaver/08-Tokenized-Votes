import { Contract, ethers, Wallet } from "ethers";
import { CustomBallot } from "../typechain";
import * as ballotJson from "../artifacts/contracts/CustomBallot.sol/CustomBallot.json";

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet = process.env.MNEMONIC && process.env.MNEMONIC.length > 0 
                  ? Wallet.fromMnemonic(process.env.MNEMONIC)
                  : new Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);

  const provider = ethers.providers.getDefaultProvider("goerli");
  const signer = wallet.connect(provider);

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
