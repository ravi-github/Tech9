'use strict';

const getSquareSum = (num) => {
  let digit, squareSum = 0;
  while(1) {
    digit = (num % 10);
    squareSum += (digit * digit);
    num = Math.floor(num / 10);
    if(num === 0) break;
  }
  return squareSum;
};

const isHappy = (num) => {
  let isHappy = false, currentSquaresum;
  const setOfSquareSums = new Set();
  currentSquaresum = num;
  while(1) {
    currentSquaresum = getSquareSum(currentSquaresum);
    if(!setOfSquareSums.has(currentSquaresum)) {
      setOfSquareSums.add(currentSquaresum);
    } else {
      if(currentSquaresum === 1) {
        isHappy = true;
      } 
      break;
    }
  }
  return isHappy;  
};
