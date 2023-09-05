// https://leetcode.com/problems/reduce-array-size-to-the-half/description/

/**
 * @param {number[]} arr
 * @return {number}
 */

// 시간복잡도 : O(nlogn) 정렬을 사용해서 시간복잡도는 O(nlogn)
// 공간복잡도 : O(n) 최대 주어진 root의 길이 만큼 배열이 사용 되어서 공간복잡도는 O(n)

function minSetSize(arr) {
  let halfSize = arr.length / 2;
  const numsCounts = [];

  for (let i = 0; i < arr.length; i++) {
    numsCounts[arr[i]] = numsCounts[arr[i]] + 1 || 1;
    if (halfSize <= numsCounts[arr[i]]) return 1;
  }

  arr = numsCounts.filter(((num) => num !== 0));
  arr.sort((a,b) => b - a);
  
  let countRemoved = 0;

  while (0 < halfSize) {
    halfSize -= arr[countRemoved];
    countRemoved++;
  }

  return countRemoved;
}
