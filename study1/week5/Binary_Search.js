// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 시간복잡도 : O(logn) 최대 주어진 nums의 총 길이 n, logn 만큼 반복문이 실행 되어서 시간복잡도는 O(logn)
// 공간복잡도 : O(1) 변수 3개만 사용해서 공간복잡도는 O(1)

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;
  }

  return -1;
}
