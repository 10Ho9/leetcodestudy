// https://leetcode.com/problems/decode-ways/description/

/**
 * @param {string} s
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 s의 총 길이 n 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 공간복잡도는 O(1)


function numDecodings(s) {
  if (s[0] === "0" || s.length === 0) return 0;

  const memo = [1, 1];

  for (let i = 1; i < s.length; i++) {
    let current = 0;

    if (s[i] !== '0') current = memo[0];

    const twoDigit = Number(s[i-1] + s[i]);

    if (9 < twoDigit && twoDigit < 27) current += memo[1];

    memo[1] = memo[0];
    memo[0] = current;
  }

  return memo[0];
}
