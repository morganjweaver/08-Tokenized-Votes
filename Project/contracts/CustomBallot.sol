// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface IERC20Votes {
    function getPastVotes(address, uint256) external view returns (uint256);
}

/// @title CustomBallot Contract 
/// @author Matheus Pagani
/// @notice Allows creating proposals and voting based on ERC20 voting tokens with partner contract Token.sol
/// @dev Implements voting-extended ERC20 to determine number of votes per user 
contract CustomBallot {
    event Voted(
        address indexed voter,
        uint256 indexed proposal,
        uint256 weight,
        uint256 proposalVotes
    );

    struct Proposal {
        bytes32 name;
        uint256 voteCount;
    }

    mapping(address => uint256) public spentVotePower;

    Proposal[] public proposals;
    IERC20Votes public voteToken;
    uint256 public referenceBlock;

    constructor(bytes32[] memory proposalNames, address _voteToken) {
        for (uint256 i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
        voteToken = IERC20Votes(_voteToken);
        referenceBlock = block.number;
    }

    /// @notice Allows user to vote on given proposal with amount of votes
    /// @dev Emits Voted event on completion
    /// @param proposal the number of the desired proposal to vote on, zero-indexed
    /// @param amount whole number of votes to cast based on personal count of voting tokens
    function vote(uint256 proposal, uint256 amount) external {
        uint256 votingPowerAvailable = votingPower();
        require(votingPowerAvailable >= amount, "Has not enough voting power");
        spentVotePower[msg.sender] += amount;
        proposals[proposal].voteCount += amount;
        emit Voted(msg.sender, proposal, amount, proposals[proposal].voteCount);
    }

    /// @notice Returns name of proposal with most votes
    /// @return winnerName_ byte32-encoded string value
    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = proposals[winningProposal()].name;
    }

    /// @notice Returns index number of proposal with most votes
    /// @return winningProposal_ Zero-indexed value of winning proposal number
    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    /// @notice Returns remaining votes of the message sender.
    /// @return votingPower_ number of total votes minus votes used for msg.sender
    function votingPower() public view returns (uint256 votingPower_) {
        votingPower_ =
            voteToken.getPastVotes(msg.sender, referenceBlock) -
            spentVotePower[msg.sender];
    }

    /// @notice Returns count of proposals that have been created. 
    /// @return numProposals length of proposals array
    function getProposalsLength() public view returns (uint256 numProposals) {
        return proposals.length;
    }
}
