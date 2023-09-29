// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


// 시간복잡도 : O(log n) 주어진 nums들 중 가장 짧은 nums의 길이를 n, log n만큼 반복문이 실행 되어서 시간복잡도는 O(log n)
// 공간복잡도 : O(1) 항상 고정개수만큼의 변수만 사용되어서 O(1)

function findMedianSortedArrays(nums1, nums2) {
  if (nums2.length < nums1.length) [nums1, nums2] = [nums2, nums1];
  
  const len1 = nums1.length;
  const len2 = nums2.length;
  let start = 0;
  let end = len1;

  while (start <= end) {
    const partition1 = Math.floor((start + end) / 2);
    const partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;

    const max1 = (partition1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
    const max2 = (partition2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];
    const min1 = (partition1 === len1) ? Number.MAX_SAFE_INTEGER : nums1[partition1];
    const min2 = (partition2 === len2) ? Number.MAX_SAFE_INTEGER : nums2[partition2];

    if (max1 <= min2 && max2 <= min1) {
      if ((len1 + len2) % 2 === 0) return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
      else return Math.max(max1, max2);
    } else if (min2 < max1) end = partition1 - 1;
    else start = partition1 + 1;
  }
}
