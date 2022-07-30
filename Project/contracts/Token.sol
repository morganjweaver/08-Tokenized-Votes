// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

/// @title A simple ERC20 voting token contract
/// @author Matheus Pagani
/// @notice Use this contract with CustomBallot.sol to mint voting tokens and vote
/// @dev This contract implements several overrides required to make the interfaces work
/// @custom:teaching This is a contract meant for teaching only
contract MyToken is ERC20, AccessControl, ERC20Permit, ERC20Votes {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    /// @dev Token name and symbol are fixed.
    constructor() ERC20("MyToken", "MTK") ERC20Permit("MyToken") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    /// @notice Mints new voting tokens
    /// @param to address to send the tokens to
    /// @param amount How many tokens to send
    /// @notice Only the contract deployer/MINTER_ROLE can mint tokens
    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    /// @dev The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}