// https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 시간복잡도 : O(n^2) 주어진 numRows * numRows - 2 만큼 반복문이 실행 되어서 시간복잡도는 O(n^2)
// 공간복잡도 : O(n^2) 주어진 (numRows * numRows + 1) / 2의 길이 만큼 배열이 사용 되어서 공간복잡도는 O(n^2)

function generate(numRows) {
  const result = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1);
    result[i][0] = 1
    result[i][i] = 1

    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];  
    }
  }
  return result;
}
