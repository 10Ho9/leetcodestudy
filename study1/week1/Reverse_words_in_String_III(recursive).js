/**
 * @param {string} s
 * @return {string}
 */

// 시간복잡도 : O(n) 주어진 문장의 단어의 갯수만큼 각각 한 번씩 reverseWord가 실행되니깐 시간복잡도는 O(n)
// 공간복잡도 : O(n) reverseWord 함수에서 restCount가 0이 될 때까지 실행된 reverseWord가 스택에 쌓여 있기 때문에 공간복잡도는 O(n)

function reverseWords(s) {
  const wordsArray = s.split(" ");
  const wordsCount = wordsArray.length;
  
  return reverseWord(wordsArray, wordsCount);
}

function reverseWord(wordsArray, restCount) {
  if(restCount == 0) {
    return wordsArray.join(" ");;
  }
  
  const position = restCount - 1;
  
  wordsArray[position] = wordsArray[position].split(""); 
  wordsArray[position].reverse();
  wordsArray[position] = wordsArray[position].join("");
  
  return reverseWord(wordsArray, position);
}
