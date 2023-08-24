// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */

// 시간복잡도 : O(n) 주어진 문장의 단어의 갯수만큼 각각 한 번씩 reverseWord가 실행되니깐 시간복잡도는 O(n)
// 공간복잡도 : O(n) 주어진 문장에 따라 최대 s길이의 2배가 공간이 별도로 필요 공간복잡도는 O(n)

function reverseWords(s) {
  const wordsArray = s.split(" ");
  
  for (let i = 0; i < wordsArray.lenght; i++) {
    wordsArray[i] = reverseWord(word);
  }
  return wordsArray.join(" ");
}

function reverseWord(word) {
  word = word.split(""); 
  word.reverse();
  return word.join("")
}
