// https://leetcode.com/problems/sliding-window-maximum/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 시간복잡도 : O(n) 주어진 s의 총 길이 n만큼 반복문이 실행 되어서 시간복잡도는 O(n * k)
// 공간복잡도 : O(n) 최대 nums의 길이 * 2 만큼 공간이 필요하기 때문에 O(n)

function maxSlidingWindow(nums, k) {
  if (k === 1 || nums.length === 1) return nums;

  const result = [];
  const stack = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    while (start < stack.length && nums[stack[stack.length - 1]] <= nums[i]) stack.pop();
    stack.push(i);

    if (stack[start] <= i - k) start++;
    if (k - 1 <= i) result.push(nums[stack[start]]);
  }
  return result;
}
