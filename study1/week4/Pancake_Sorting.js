// https://leetcode.com/problems/pancake-sorting/

/**
 * @param {number[]} arr
 * @return {number[]}
 */

// 시간복잡도 : O(n^2) 최대 주어진 arr의 총 길이 n^2 만큼 반복문이 실행 되어서 시간복잡도는 O(n^2)
// 공간복잡도 : O(n) 최대 arr의 길이의 2배만큼 배열이 필요하므로 공간복잡도는 O(n)

function pancakeSort(arr) {
  const result = [];
  let max = arr.length;

  while (0 < max) {
    while (arr[max - 1] !== max) {
      const index = arr.indexOf(max);
      if (!index) {
        result.push(max);
        arr = arr.slice(0, max).reverse();
      } else {
        result.push(index + 1);
        arr = arr.slice(0, index + 1).reverse().concat(arr.slice(index+1));
      }
    }
    max--;
  }
  return result;
}
