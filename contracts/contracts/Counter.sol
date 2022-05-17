//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Counter {
    uint256 public count = 0;

    event CounterUpdated(address indexed user, uint256 count);

    function update() public {
        count++;

        emit CounterUpdated(msg.sender, count);
    }
}
