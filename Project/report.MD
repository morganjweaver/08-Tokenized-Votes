## Group 7 Project Report

Sun Jul 23

Homework 0x0000000000000000000000000000000000000002

Discord IDs/Names: @s6thgehr (Thomas Gehrmann) @libertine (Morgan Weaver) @sdav (Solène Daviaud) @3fOhorky (Stjepan Hrvoje Horvat)

Here we present the results of running our scripts with several proposals for tokenized voting, and the functionality of our scripts verifiable by blockchain transactions.

Please see tests directory for testing information. We deployed the contracts on **goerli testnet**.

----------------------------------------------------------------------------------
**TL;DR**
1. The chairperson deployed the token contract and minted 10 tokens for everyone.
2. Everyone delegated voting rights to themself or to someone else in order to "activate" the votes.
3. The first ballot contract was deployed.
4. Everyone voted on the ballot.
5. Some delegated their votes to someone else.
6. Second Ballot contract was deployed.
7. Everyone voted on that Ballot, too.
8. Query winners for both ballots.
----------------------------------------------------------------------------------


Token address: **0x1b111CA1314D4d387D1fE2792323c0a9cFFC09CE**

Proposals Ballot 1 (**0x513b542be775BE31cAEFf19F97753367757EcAa8**): 

1. Chocolate
2. Vanilla
3. Raspberry
4. Pistachio
5. Strawberry

Proposals Ballot 2 (**0xa927Effa17E6E57e33Eef82c89051AB9Be47E708**):

1. Barcelona
2. Paris
3. Berlin
4. Seoul
5. New York

Voters Appointed:

1. 0x5214990E840dEB4581760606a9970a0186AAa7F3 (Chairperson)
2. 0x97c44088Bb74583A03E0d21E9e56cdae60a306B0
3. 0x6E39C86191D1D2581a24198b06a3f6dacE03aF91
4. 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf
5. 0xd1800C1Df4e798954b992a1b8C8fB7C02c3957D6

Transactions:

| Tx Hash                                                            | From                                       | To  | Action            | Notes             |
| ------------------------------------------------------------------ | ------------------------------------------ | --- | ----------------- | ----------------- |
| 0x2159621b5c6d94cb8ade0dd8774a729f86ef9ce50993bee2c00e8e8f55ef52fe | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run tokenDeployment.ts | Token Contract Creation |
| 0x932e809f75e133f233b228cd89b70efd28ddcd30857f4d7e8fcd06411b2889f5 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run mint.ts | Mint Token |
| 0x32673a429160fe43df5ef9128bc4ffe897b2f56f214a5f160fec6eaf78bdc96c | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run mint.ts | Mint Token |
| 0xb6121bf538d0865c6cc89d8836ec70e8230d9e1537846ffe290dc32133b0552b | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run mint.ts | Mint Token |
| 0xfd26331a9206c34abe529779116d2175a1273fc17f22ff56a90246a36b7ad3a3 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run mint.ts | Mint Token |
| 0x620469db3ad87e6fce67be0701a1bdebae57f519f63538fcdf8296e32100abc8 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run mint.ts | Mint Token |
| 0x487a13b5c3b767f4e285a483a64184b90255146627df6fe4aaebb1674c6ae913 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run delegate.ts | Delegate Votes |
| 0xd015c7f13f8c4b0580036609da7873b1b9d102cbe3b98ea39fb16cf4bae2ac73 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run delegate.ts | Delegate Votes |
| 0x7c0080483a0d63e0faebbbb09b3235424e92fb1073bc77428f512db62cb26919 | 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf | 0x1b111CA1314D4d387D1fE2792323c0a9cFFC09CE | run delegate.ts | Delegate self as voter |
| 0x87691ee6e40c6404e6d8a515d0ef9a6f2041e24d9c92487aca62d24b136cedc3 | 0x97c44088bb74583a03e0d21e9e56cdae60a306b0 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run delegate.ts | Delegate Votes |
| 0x8bb421625e0b2dcf069eb2e3562b84eeff10e335035c84f4696ab419ebab7b6a | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run delegate.ts | Delegate Votes |
| 0x1526fed4315c121e1293c06ef95e50be902e5d11121cf0bcd4178203b4d81579 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x513b542be775be31caeff19f97753367757ecaa8 | run ballotDeployment.ts | Deploy first ballot contract |
| 0x6b0bcd68b460c29205f1b7bec171edc6eb0c00266b03eba90f0cdc859f9c4835 | 0x6e39c86191d1d2581a24198b06a3f6dace03af91 | 0x513b542be775BE31cAEFf19F97753367757EcAa8 | run castVote.ts | Cast vote|
| 0xb5c9bcf16f48a36b8a5c57700afa43e4773293a18e65c176ff9bad326447f30e | 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf | 0x513b542be775BE31cAEFf19F97753367757EcAa8 | run castVote.ts | Cast vote|
| 0x681b16e8bab399309edddcc221e5ff1d09132b509268d748925a230501cd0ad3 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x513b542be775BE31cAEFf19F97753367757EcAa8 | run castVote.ts | Cast vote|
| 0xac82458377594de3213f3e101334e96171271d851b8ff39f0fddb3677c31c78a | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x513b542be775BE31cAEFf19F97753367757EcAa8 | run castVote.ts | Cast vote|
| 0xe5a84efcbdbbe20730e76c5523c9e04210a7528d5505a52e90dca6dc3bef2cf6 | 0x6e39c86191d1d2581a24198b06a3f6dace03af91 | 0x513b542be775BE31cAEFf19F97753367757EcAa8 | run castVote.ts | Cast vote|
| 0x531178f6f8c7d5aaf22d6af83d0ae4206af14da7615cf9e2cd81d9d007dd44d3 | 0xd1800c1df4e798954b992a1b8c8fb7c02c3957d6 | 0x513b542be775BE31cAEFf19F97753367757EcAa8 | run castVote.ts | Cast vote|
| 0x371a12f8f9de6078015b684f1a81b52ba2eab033cfa2eab282e290c00d8e3397 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run delegate.ts | Delegate Votes|
| 0x2f4ed6b5dc990e3ca7813b68d6f554563342a931304b9166c6ba297af736a24c | 0x6e39c86191d1d2581a24198b06a3f6dace03af91 | 0x1b111ca1314d4d387d1fe2792323c0a9cffc09ce | run delegate.ts | Delegate Votes|

| 0x5da7afaeaf576d2c6e294fca3e0bccf5795c0d3f5a55f90473b82dee2c912e80 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0xa927effa17e6e57e33eef82c89051ab9be47e708 | run ballotDeployment.ts | Deploy second ballot contract |
| 0x28d1eee2e3cefc4e47b25fdd27a9f362a2731d1d9ce7b69faf3ab3d04c1cb1d8 | 0x5214990e840deb4581760606a9970a0186aaa7f3 | 0xa927Effa17E6E57e33Eef82c89051AB9Be47E708 | run castVote.ts | Cast vote |
| 0x886bb001f98487c8eabf53531abef26b14ff8b566c9c6c4ea20c97dc1a30146b | 0x6e39c86191d1d2581a24198b06a3f6dace03af91 | 0xa927Effa17E6E57e33Eef82c89051AB9Be47E708 | run castVote.ts | Cast vote |
| 0x28525c9d1de63b4d7a701d36d5d0e1c3aedebad42826d84d761ecb85921fd16d | 0x97c44088bb74583a03e0d21e9e56cdae60a306b0 | 0xa927Effa17E6E57e33Eef82c89051AB9Be47E708 | run castVote.ts | Cast vote |
| 0x387a6af71956c4140d2251e60fded734b9d30f83082fbf03d486e70938cff428 | 0xd1800c1df4e798954b992a1b8c8fb7c02c3957d6 | 0xa927Effa17E6E57e33Eef82c89051AB9Be47E708 | run castVote.ts | Cast vote |
| 0x8f42c90ba7781b52722f120190afa33a68c8ac873229f0d9ce87d5f8c2dec525 | 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf | 0xa927Effa17E6E57e33Eef82c89051AB9Be47E708 | run castVote.ts | Cast vote |
| query execution of first ballot, no Tx hash | 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf | 0x513b542be775be31caeff19f97753367757ecaa8 | run queryResult.ts | Query winner (Raspberry) |
| query execution, no Tx hash | 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf | 0xa927Effa17E6E57e33Eef82c89051AB9Be47E708 | run queryResult | Query winner (Barcelona) | 

Running scripts:

1. **Deployment**:

   *yarn ts-node scripts/tokenDeployment.ts ...*
   
   Console log:
   ```
   Using address 0x5214990E840dEB4581760606a9970a0186AAa7F3
   Wallet balance 0.051901018945105376
   Deploying token
   Awaiting confirmations
   Completed
   Token contract deployed at 0x1b111CA1314D4d387D1fE2792323c0a9cFFC09CE
   ```
   
2. **Query proposals**:

   *yarn ts-node scripts/queryProposals.ts ...*
   
   Console log:
   ```
   Using address 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf
   Wallet balance 1.0217509310656996
   Proposals:
   Proposal N. 1: Chocolate
   Proposal N. 2: Vanilla
   Proposal N. 3: Raspberry
   Proposal N. 4: Pistachio
   Proposal N. 5: Strawberry
   ```

3. **Minting Tokens/Give voting rights**:

   *yarn ts-node scripts/mint.ts "contract address" "voter address" "amount"*
   
   Console log:
   ```
   Using address 0x5214990E840dEB4581760606a9970a0186AAa7F3
   Wallet balance 0.050701012943105252
   Attaching token contract interface to address 0x1b111CA1314D4d387D1fE2792323c0a9cFFC09CE
   Giving 10 votes to 0x5214990E840dEB4581760606a9970a0186AAa7F3
   Awaiting confirmations
   Completed
   Transaction completed. Hash: 0x932e809f75e133f233b228cd89b70efd28ddcd30857f4d7e8fcd06411b2889f5
   ```
   
4. **Delegate vote**:

   *yarn ts-node scripts/delegate.ts "contract address" "delegate address"*
   
   Console log:
   ```
   Using address 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf
   Attaching token contract interface to address 0x1b111CA1314D4d387D1fE2792323c0a9cFFC09CE
   Delegate votes to 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf
   Wallet balance 1.0220088230669855
   Awaiting confirmations
   Transaction completed. Hash: 0x7c0080483a0d63e0faebbbb09b3235424e92fb1073bc77428f512db62cb26919
   ```
   
5. **Cast vote**:

   *yarn ts-node scripts/castVote.ts "contract address" "proposal number" "number of votes"*
   
   Console log:
   ```
   Using address 0xcd6B97E773fD588Ddf9462dD7e4f9869e120acFf
   Wallet balance 1.0218851150663257
   Attaching Ballot contract interface to address 0x513b542be775BE31cAEFf19F97753367757EcAa8
   ```
   
6. **Query voting result**:

   *yarn ts-node scripts/queryResult.ts "contract address"*
   
   Console log:
   ```
   Using address 0x63FaC9201494f0bd17B9892B9fae4d52fe3BD377
   Winning proposal is Barcelona
   ```

