// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Chai{

    address payable deployer;

    constructor(){
        deployer = payable(msg.sender);
    }

    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    function buyChai(string memory name,string memory message) payable public {
        require(msg.value>0,"please pay some amount");
        deployer.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}