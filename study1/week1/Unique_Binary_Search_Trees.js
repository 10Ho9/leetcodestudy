// https://leetcode.com/problems/unique-binary-search-trees/submissions/

/**
 * @param {number} n
 * @return {number}
 */

// 시간복잡도 : O(n) 4n + 1만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 상수만큼의 공간을 사용해서 공간복잡도는 O(1)

function numTrees(n) {
  return factorial(2 * n) / (factorial(n) * factorial(n + 1));
}

function factorial(n) {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
}
