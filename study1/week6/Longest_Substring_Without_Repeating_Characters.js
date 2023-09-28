// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 nums의 총 길이 n 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 최대 26개 공간의 map을 사용해서 공간복잡도는 O(1)

function lengthOfLongestSubstring(s) {
  const temp = new Map();
  let start = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const key = s.charCodeAt(i);

    if (temp.has(key)) {
      start = Math.max(start, temp.get(key) + 1);
    }
      temp.set(key, i);
      count = Math.max(count, i - start + 1);
  }

  return count;
}
