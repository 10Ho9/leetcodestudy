// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

//시간복잡도 : O(n) 주어진 배열의 크기 만큼 반복문을 실행하게 되므로 O(n)
//공간복잡도 : O(1) 주어진 배열의 크기와 관계없이 항상 first, second, third의 공간만 사용하므로 O(1)

function thirdMax (nums) {
  let first = -2147483649;
  let second = -2147483649;
  let third = -2147483649;

  for (const num of nums){
    if (first == num || second == num || third == num) continue;
    if (first < num) {
      [third, second, first] = [second, first, num];
    } else if (second < num) {
      [third, second] =[second, num];
    } else if (third < num) {
      third = num;
    }
  }
  return third == -2147483649 ? first : third
};
