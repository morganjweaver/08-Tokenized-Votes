## Group 7 Project Report

Sun Jul 23

Homework 0x0000000000000000000000000000000000000002

Discord IDs/Names: @s6thgehr (Thomas Gehrmann) @libertine (Morgan Weaver) @sdav (Solène Daviaud) @3fOhorky (Stjepan Hrvoje Horvat)

Here we present the results of running our scripts with several proposals for tokenized voting, and the functionality of our scripts verifiable by blockchain transactions.

Please see tests directory for testing information. We deployed the contracts on goerli testnet.

Token address: 0x1b111CA1314D4d387D1fE2792323c0a9cFFC09CE

Proposals Ballot 1: 

1. Chocolate
2. Vanilla
3. Raspberry
4. Pistachio
5. Strawberry

Proposals Ballot 2:

1. Barcelona
2. Parin
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

Running scripts:

1. **Deployment**:

   *yarn ts-node scripts/Ballot/deployment.ts ...*
   
   Console log:
   ```
   ...
   ```
   
2. **Query proposals**:

   *yarn ts-node scripts/Ballot/queryProposals.ts ...*
   

3. **Give voting rights**:

   *yarn ts-node scripts/Ballot/giveVotingRights.ts "contract address" "voter address"*
   
   Console log:
   ```
   ...
   ```
   
4. **Delegate vote**:

   *yarn ts-node scripts/Ballot/delegate.ts "contract address" "delegate address"*
   
   Console log:
   ```
  ...
   ```
   
5. **Cast vote**:

   *yarn ts-node scripts/Ballot/castVote.ts "contract address" "proposal number"*
   
   Console log:
   ```
    ... 
   ```
   
6. **Query voting result**:

   *yarn ts-node scripts/Ballot/queryResult.ts "contract address"*
   
   Console log:
   ```
   ...
   The winning proposal is Pizza
   ```

