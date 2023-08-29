// https://leetcode.com/problems/n-th-tribonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */

// 시간복잡도 : O(n) n의 크기 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 3의 길이의 mem 배열 하나만 사용되기 때문에 공간복잡도는 O(1)

function tribonacci(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  
  let mem = [0, 1, 1];
  
  for (let i = 3; i <= n; i++) {
    [mem[0], mem[1], mem[2]] = [mem[1], mem[2], mem[0] + mem[1] + mem[2]];
  }
  return mem[2];
}
