'use strict';

const combineLists = (list1, list2) => {
  let start1 = 0, start2 = 0;
  const result = [];
  while(1) {
    if(start1 < list1.length) {
      result.push(list1[start1]);
      start1++;
    }
    if(start2 < list2.length) {
      result.push(list2[start2]);
      start2++;
    }
    if(start1 === list1.length && start2 === list2.length) break;
  }
  return result;
};
