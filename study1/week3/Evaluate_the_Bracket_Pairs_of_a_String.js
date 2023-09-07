// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/description/

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */

// 시간복잡도 : O(n) s와 knowledge의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 최대 knowledge의 길이 만큼 배열이 사용 되어서 공간복잡도는 O(n)

function evaluate(s, knowledge) {
  let knowledgeObj = {};

  for (const [key, value] of knowledge) {
    knowledgeObj[key] = value;
  }
 
  function keyReplace(key) {
  let value = knowledgeObj[key];
  return value === undefined ? "?" : value;
}

  let key = "";
  let isBracketOpen = false;
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === ")") {
      if (isBracketOpen === true) res += keyReplace(key);
      isBracketOpen = !isBracketOpen;
      key = "";
      continue;
    }

    if (isBracketOpen !== true) res += s[i];
    else key += s[i]; 
  }
  return res;
}

