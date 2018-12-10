// Code your solutions in this file

function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array;
}

function tailsNeverFails() {
  function coinToss() {
    return Math.random() >= 0.5;
  }
  let count = 0;
  while (coinToss()) {
    count++;
  }
  return `You got ${count} tails in a row!`;
}
