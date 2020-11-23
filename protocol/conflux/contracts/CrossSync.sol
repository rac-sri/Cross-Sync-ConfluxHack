pragma solidity >=0.4.21 <0.6.0;

import "./SafeMath.sol";

contract CrossSync {
    
    using SafeMath for uint256;
    
    address admin;
    
    struct user {
        uint256 valueToThePool;
        uint256 valueForExchange;
        uint256 pendingExchangeMoney;
        address payable userAddress;
    }
    
    constructor() public {
        admin = msg.sender;
    }
    
    uint256 overheadGlobal;
    uint256 totalPoolAmount;
    
    mapping(address => user) userDetails;
    
    modifier isAdmin {
        require(msg.sender == admin,"Sorry not permitted");
        _;
    }
    
    // @EXCHANGE MONEY
    
    // in case user wants to add money directly

    function deposit() public payable {
        userDetails[msg.sender].valueToThePool += msg.value;
        totalPoolAmount += msg.value;
    }
    
    function refund(address payable addr,uint256 value) public {
        require(userDetails[addr].valueToThePool > value,"Insufficient funds requested");
        addr.transfer(value);
        userDetails[addr].valueToThePool -= value;
        totalPoolAmount -= value;
    }

    function addExchangeMoney(uint256 overheadPercentage) payable public {
        uint256 overhead = overheadPercentageValue(msg.value,overheadPercentage);
        userDetails[msg.sender].valueForExchange += msg.value.sub(overhead);
        overheadGlobal += overhead;
    }
    
    function addExchangeMoneyFromPool(uint256 amount, uint256 overheadPercentage) public {
        
        uint256 overhead = overheadPercentageValue(amount,overheadPercentage);
        require(userDetails[msg.sender].valueToThePool >= (amount+overhead),"insufficient funds");
        
        overheadGlobal += overhead;
        totalPoolAmount -= amount;
        userDetails[msg.sender].valueToThePool-=amount;
        userDetails[msg.sender].valueForExchange += amount;
    
    }
    
    // for admin, to record that the money has been transfered to the user account on the harmony chain, after it was recorded in the ethereum chain
    function redeemExchangeMoney(address addr,uint256 amount) isAdmin public {
        require(userDetails[addr].valueForExchange >= amount,"insufficient funds");
        userDetails[addr].valueForExchange -= amount;
    }
        
    // money deposited in the harmony contract, now equivalent is delivered here on ethereum
    function transferEquivalentAmount(address payable addr, uint256 value) isAdmin public {
        require(address(this).balance >= value,"Insufficient Collatoral");
        addr.transfer(value);
    }
    
    // transaction and fees calulation
    
    function overheadPercentageValue(uint256 value,uint overheadPercentage) public pure returns(uint256) {
        uint256 overheadInterest = (value * overheadPercentage)/100;
        return overheadInterest;
    }
    
    function updateBalance(address payable add,uint interestRate,uint timeInYears) public{
        userDetails[add].valueToThePool = userDetails[add].valueToThePool.mul(interestRate.mul(timeInYears));
    }
    
    
    
    // interest calculation for liquidators
    
    function moneyRecievedByLiquidator(address add) public view returns (uint256){
        uint256 balance = returnTotolPoolMoney();
        
        // protocolShare = share of CrossSync and totalOverAmount - protocolShare
        uint256 share = (userDetails[add].valueToThePool.mul(balance.sub(overheadGlobal))).div(balance);

        return share;
    }
    

    function withdraw() public returns (bool) {
        uint256 addition = moneyRecievedByLiquidator(msg.sender);
        uint256 amount = addition + userDetails[msg.sender].valueToThePool;
        userDetails[msg.sender].valueToThePool = 0;
        msg.sender.transfer(amount);
        return true;
    }
        
    // get contract details
    
    function getMoney() view public returns(uint256 money){
        return address(this).balance;
    }
    
    function getUserDetails(address addr) public view returns(  uint256 valueToThePool,
        uint256 valueForExchange,
        uint256 pendingExchangeMoney,
        address userAddress){
        return (userDetails[addr].valueToThePool, userDetails[addr].valueForExchange,userDetails[addr].pendingExchangeMoney,userDetails[addr].userAddress);
    }
    
    function returnOverheadValues() public isAdmin view returns(uint256){
        return overheadGlobal;
    } 
    
    function returnTotolPoolMoney() public view returns(uint256){
        return totalPoolAmount;
    }

}