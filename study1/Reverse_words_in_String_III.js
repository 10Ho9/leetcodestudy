/**
 * @param {string} s
 * @return {string}
 */
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
