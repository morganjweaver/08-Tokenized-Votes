// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/// @title ERC20Votes interface
/// @dev Used to call the necessary functions from the token address 
interface IERC20Votes {
    /// @notice get all the votes casted by the address from a reference block number
    function getPastVotes(address, uint256) external view returns (uint256);
}

/// @title Simple voting ballot contract
/// @author EncodeBootcamp
/// @notice You can use this contract to run voting on custom proposals
contract CustomBallot {

    /// @notice Event used to signal that user voted
    /// @param voter Voter address
    /// @param proposal Identifier of the voted proposal
    /// @param weight Vote weight, amounts to the number of votes given through a single vote
    /// @param proposalVotes Total amount of votes for voted proposal
    event Voted(
        address indexed voter,
        uint256 indexed proposal,
        uint256 weight,
        uint256 proposalVotes
    );

    /// @notice Proposal struct
    /// @param name Name of the proposal
    /// @param voteCount Total amount of votes for the proposal
    struct Proposal {
        bytes32 name;
        uint256 voteCount;
    }

    /// @notice Amount of voting power spent by address
    mapping(address => uint256) public spentVotePower;

    /// @notice Array of proposals
    Proposal[] public proposals;
    /// @notice Address of the token used for voting
    IERC20Votes public voteToken;
    /// @notice Block number when the contract was first deployed
    uint256 public referenceBlock;

    /// @notice Contract constructor
    /// @param proposalNames Array of all the proposals that will be voted on
    /// @param _voteToken Address of the token used for voting
    constructor(bytes32[] memory proposalNames, address _voteToken) {
        for (uint256 i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
        voteToken = IERC20Votes(_voteToken);
        referenceBlock = block.number;
    }

    /// @notice Vote on the proposal
    /// @param proposal Proposal identifier
    /// @param amount Amount of votes used
    function vote(uint256 proposal, uint256 amount) external {
        uint256 votingPowerAvailable = votingPower();
        require(votingPowerAvailable >= amount, "Has not enough voting power");
        spentVotePower[msg.sender] += amount;
        proposals[proposal].voteCount += amount;
        emit Voted(msg.sender, proposal, amount, proposals[proposal].voteCount);
    }

    /// @notice Get the name of the winning proposal
    /// @return winnerName_ name of the winning proposal
    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = proposals[winningProposal()].name;
    }

    /// @notice Get the identifier of the winning proposal
    /// @dev If no votes were casted, returns the first proposal in the proposals array
    /// @return winningProposal_ winning proposal identifier
    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    /// @notice Get the voting power of the sender address
    /// @return votingPower_ voting power
    function votingPower() public view returns (uint256 votingPower_) {
        votingPower_ =
            voteToken.getPastVotes(msg.sender, referenceBlock) -
            spentVotePower[msg.sender];
    }

    /// @notice Get the total number of proposals
    /// @return numProposals number of proposals
    function getProposalsLength() public view returns (uint256 numProposals) {
        return proposals.length;
    }
}
