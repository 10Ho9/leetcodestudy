// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 n - 2 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 길이가 2인 배열만 사용하므로 공간복잡도는 O(1)

function climbStairs(n) {
  const mem = [1, 2];

  for (let i = 2; i < n; i++) {
    mem[i % 2] = mem[0] + mem[1];
  }
  return mem[(n + 1) % 2];
}
