## Group 7 Project Report

Sun Jul 23

Homework 0x0000000000000000000000000000000000000002

Discord IDs/Names: @s6thgehr (Thomas Gehrmann) @libertine (Morgan Weaver) @sdav (Solène Daviaud) @3fOhorky (Stjepan Hrvoje Horvat)

Here we present the results of running our scripts with several proposals for tokenized voting, and the functionality of our scripts verifiable by blockchain transactions.

Please see tests directory for testing information.

Proposals Ballot 1:

1. Chocolate
2. Vanilla
3. Rasperry
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
| 0xDEADBEEF | 0xDEADBEEF | 0xDEADBEEF | run deployment.ts | Contract Creation |


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

