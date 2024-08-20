// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public count;

    constructor() {
        count = 5;
    }
    // constructor(uint256 _count)  {
    //     count = _count;
    // }
    // function setNumber(uuint256 newNumber) public {
    //     count = newNumber;
    // }

    function increment() public {
        count++;
    }

    function decrement() public {
        count--;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
