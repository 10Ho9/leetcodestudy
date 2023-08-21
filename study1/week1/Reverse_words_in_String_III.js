/**
 * @param {string} s
 * @return {string}
 */

// 시간복잡도 : O(n) 주어진 문장의 단어의 갯수만큼 각각 한 번씩 reverseWord가 실행되니깐 시간복잡도는 O(n)
// 공간복잡도 : O(1) 주어진 문장에 따라 사용하는 공간이 달라지지 않기 때문에 공간복잡도는 O(n)

function reverseWords(s) {
  const wordsArray = s.split(" ");
  let index = 0;
  
  for(const word of wordsArray) {
    wordsArray[index] = reverseWord(word);
    index++;
  }
  return wordsArray.join(" ");
}

function reverseWord(word) {
  word = word.split(""); 
  word.reverse();
  return word.join("")
}
