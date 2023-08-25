//https://leetcode.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 시간복잡도 : O(n) 주어진 nums의 크기 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 주어진 nums의 크기 만큼 새로운 배열을 생성해서 공간복잡도는 O(n)

function findErrorNums(nums) {
  const correctSum = (nums.length * (nums.length + 1)) / 2;
  const checkArray = new Array(nums.length);
  
  let sum = 0;
  let duplicate = 0;

  for (const num of nums) {
    if (checkArray[num - 1]) {
      duplicate = num;
    } else {
      checkArray[num - 1] = true;
    }
    sum += num;
  }
  return [duplicate, correctSum - sum + duplicate];
};
