// https://leetcode.com/problems/sliding-window-maximum/solutions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 시간복잡도 : O(n * k) 주어진 s의 총 길이 n * k만큼 반복문이 실행 되어서 시간복잡도는 O(n * k)
// 공간복잡도 : O(n) 최대 nums의 길이 + 1 만큼 공간이 필요하기 때문에 O(n)

function maxSlidingWindow(nums, k) {
  if (k === 1 || nums.length === 1) return nums;

  const result = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (0 < q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push(i);

    if (q[0] <= i - k) q.shift();
    if (k - 1 <= i) result.push(nums[q[0]]);
  }
  return result;
}
