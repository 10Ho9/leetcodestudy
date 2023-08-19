/**
 * @param {string} s
 * @return {string}
 */
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
