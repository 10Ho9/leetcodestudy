// https://leetcode.com/problems/max-area-of-island/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// 시간복잡도 : O(n) 최대 주어진 image의 총 길이 * 4 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 주어진 image의 총 길이 만큼의 스택을 만들어서 사용해서 공간복잡도는 O(n)

function maxAreaOfIsland(grid) {
  const maxRow = grid.length;
  const maxCol = grid[0].length;

  function currentArea(row, col) {
    const stack = [[row, col]];
    let currentArea = 0;

    while (0 < stack.length) {
      let [currentRow, currentCol] = stack.pop();

      if (grid[currentRow][currentCol] !== 1) continue;
        
      grid[currentRow][currentCol] = 0;
      currentArea++;

      if (currentRow + 1 < maxRow) stack.push([currentRow + 1, currentCol]);
      if (0 <= currentRow - 1) stack.push([currentRow - 1, currentCol]);
      if (currentCol + 1 < maxCol) stack.push([currentRow, currentCol + 1]);
      if (0 <= currentCol -1) stack.push([currentRow, currentCol - 1]);
    }
    return currentArea;
  }

  let maxArea = 0;
  
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      if (grid[i][j] === 1) maxArea = Math.max(maxArea, currentArea(i, j));
    }
  }

  return maxArea;
}
