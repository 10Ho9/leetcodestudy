// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

// 시간복잡도 : O(q * n) nums의 길이를 n, queries의 길이를 q, 주어진 nums을 정렬하기 nlogn, 최대 반복문을 q * n 만큼 하기 때문에 시간복잡도는 O(q * n)
// 공간복잡도 : O(q) queries의 길이 만큼의 배열이 필요하므로 공간복잡도는 O(q)

function answerQueries(nums, queries) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    let count = 0;
    for (const num of nums) {
      sum += num;
      if (sum <= queries[i]) count++;
      else break;
    }
    result[i] = count;
  }
  return result;
}
