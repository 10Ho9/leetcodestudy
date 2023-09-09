// https://leetcode.com/problems/flood-fill/submissions/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// 시간복잡도 : O(n) 주어진 head의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 주어진 head를 사용해서 공간복잡도는 O(1)

function floodFill(image, sr, sc, color) {
  const startColor = image[sr][sc];
  const stack = [[sr, sc]];
  const lengthRow = image.length;
  const lengthCol = image[0].length;

  if (startColor === color) return image;
  
  while (0 < stack.length) {
    const [row, col] = stack.pop();
    
    if (image[row][col] !== color) {
      const direction = [[row - 1, col], [row + 1, col], [row, col + 1], [row, col - 1]];
      image[row][col] = color;

      for (const d of direction) {
        if (0 <= d[0] && d[0] < lengthRow && 0 <= d[1] && d[1] < lengthCol && image[d[0]][d[1]] === startColor) stack.push([d[0], d[1]]);
      }
    }
  }
  return image;
}
