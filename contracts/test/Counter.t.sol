// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter(3);
        // counter.setNumber(0);
    }

    // function test_Increment() public {
    //     counter.increment();
    //     assertEq(counter.number(), 1);
    // }

    // function testFuzz_SetNumber(uint256 x) public {
    //     counter.setNumber(x);
    //     assertEq(counter.number(), x);
    // }

    function testGetCount() public  {
       uint256 count = counter.getCount();

        assertEq(count, 3);
        emit log_named_uint("Counter value", count);
    }

    function testIncrement() public  {
        counter.increment();
        uint256 count = counter.getCount();

        // assert(counter == 4);
        assertEq(count, 4);
        emit log_named_uint("Increment value", count);
    }


}
