// https://leetcode.com/problems/longest-palindrome/description/

/**
 * @param {string} s
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 s의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 주어진 s와 관계없이 항상 최대 59의 길이의 배열을 사용하기 때문에 공간복잡도는 O(1)

function longestPalindrome(s) {
  let result = 0;
  const lettersCountArray = Array.from({length: 59}, () => 0);

  for (let i = 0; i <= s.length; i++) {
    lettersCountArray[s.charCodeAt(i) - 65] += 1;
    if (lettersCountArray[s.charCodeAt(i) - 65] % 2 === 0) result += 2;
  }

  return s.length > result ? result + 1 : result;
}
