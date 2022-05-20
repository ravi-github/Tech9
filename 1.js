'use strict';

const twoSumCheck = (nums, target) => {
  let current, hasTwoSum = false;
  const arrayMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    current = nums[i];
    if(arrayMap.get(target - current) !== undefined) {
      hasTwoSum = true;
      break;
    }
    arrayMap.set(current, i);
  }
  return hasTwoSum;
};