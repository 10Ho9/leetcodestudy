// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 시간복잡도 : O(s * w) 가장 긴 문자열이 w, strs의 길이가 s, s만큼 반복문이 실행 될때 각각의 문자열의 문자를 한번씩 다 확인 하기 때문에 시간복잡도는 O(s * w)
// 공간복잡도 : O(n) 최대 s개의 map 공간복잡도는 O(n)

function groupAnagrams(strs) {
  const map = new Map();
  let count = new Array(26);

  for (const str of strs) {
    count.fill(0);

    for (const char of str) count[char.charCodeAt() - 97]++;
    const key = count.join();
    
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return Array.from(map.values());
}
