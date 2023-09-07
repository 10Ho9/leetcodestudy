// https://leetcode.com/problems/vowel-spellchecker/description/

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */

// 시간복잡도 : O(n) 주어진 wordlist와 queries의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 최대 주어진 wordlist의 길이 만큼 2개의 배열이 사용 되어서 공간복잡도는 O(n)

function spellchecker(wordlist, queries) {
  const vowelRegex = /[aeiou]/g;
  const lowerList = {};
  const vowelList = {};

  for (const word of wordlist) {
    let low = word.toLowerCase();
    let vow = low.replace(vowelRegex, 0)
    if (lowerList[low] === undefined) lowerList[low] = word;
    if (vowelList[vow] === undefined) vowelList[vow] = word;
  }
  return queries.map(word => {
    if (wordlist.includes(word)) return word;
    
    word = word.toLowerCase();
    if (Object.hasOwn(lowerList, word)) return lowerList[word];
    
    word = word.replace(vowelRegex, 0);
    if (Object.hasOwn(vowelList, word)) return vowelList[word];
    
    return "";
  })
}
