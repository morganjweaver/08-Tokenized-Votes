## Group 7 Project Report

Sun Jul 23

Homework 0x0000000000000000000000000000000000000002

Discord IDs/Names: @s6thgehr (Thomas Gehrmann) @libertine (Morgan Weaver) @sdav (Solène Daviaud) @3fOhorky (Stjepan Hrvoje Horvat)

Here we present the results of running our scripts with several proposals for tokenized voting, and the functionality of our scripts verifiable by blockchain transactions.

Please see tests directory for testing information.

Proposals:

1. Ramen
2. Pizza
3. Burger
4. Tacos
5. Ražnjići

Voters Appointed:

1.  (Chairperson)
2. 
3.
4.
5.

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

