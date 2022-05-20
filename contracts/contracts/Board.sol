//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Board {
    uint256 public id;

    event NewMessage(uint256 id, address sender, string message, uint256 block);

    function sendMessage(string calldata message) public {
        id++;

        emit NewMessage(id, msg.sender, message, block.number);
    }
}
