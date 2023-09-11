// https://leetcode.com/problems/search-suggestions-system/description/

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// 시간복잡도 : O(nlogn) 정렬이 실행 되어서 시간복잡도는 O(nlogn)
// 공간복잡도 : O(n) 주어진 searchWord의 길이 * 3 만큼의 스택을 만들어서 사용해서 공간복잡도는 O(n)

function suggestedProducts(products, searchWord) {
  const result = [];
  products.sort();

  for (let i = 0; i < searchWord.length; i++) {
    const prefix = searchWord.slice(0, i + 1);
    result[i] = products.filter(product => product.slice(0, i + 1) === prefix).slice(0,3)
  }
  return result;
}
