// https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */

// 시간복잡도 : O(n) 최대 s의 길이 * 2 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) left, right변수 2개만 사용 되어서 공간복잡도는 O(1)

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  
  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }
    return true;
  }
  
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return isPalindrome(left + 1 , right) || isPalindrome(left, right - 1);
    }    
  }  
  return true;
}
