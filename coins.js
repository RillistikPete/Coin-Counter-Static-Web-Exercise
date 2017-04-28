/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


function coinCounter (coins) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = Math.floor(coins / .25);
  coinPurse.dimes = Math.floor((coins - (coinPurse.quarters * .25)) / .1);
  coinPurse.nickels = Math.floor((coins - (coinPurse.dimes * .1) - (coinPurse.quarters * .25)) / .05);
  coinPurse.pennies = Math.floor((coins - (coinPurse.nickels * .05) - (coinPurse.dimes * .1) - (coinPurse.quarters * .25)) / .01);

  return coinPurse;
}

var coins = coinCounter(.22);
console.log(coins);