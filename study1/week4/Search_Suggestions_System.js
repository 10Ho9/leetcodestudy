// https://leetcode.com/problems/search-suggestions-system/description/

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// products의 길이 p, products에서 가장 긴 원소 w, searchWord의 길이 s
// 시간복잡도 : - 정렬의 시간복잡도 O(w * p log p)
             - 최대 s * p만큼 반복 하고 반복마다 최대 s길이 만큼의 문자열 비교를 하기 때문에 O(p * s^2)
               총 시간복잡도는 O(w * p log p + p * s^2) 
// 공간복잡도 : O(ws) 최대 w가 3번씩 들어간 s만큼의 길이의 배열이 필요하므로 공간복잡도는 O(ws)

function suggestedProducts(products, searchWord) {
  const result = [];
  let prefix = "";
  products.sort();

  for (const char of searchWord) {
    const temp = [];
    let count = 3;
    prefix += char;

    for (const product of products) {
      if (0 < count && prefix.length <= product.length && product.startsWith(prefix)) {
        temp.push(product);
        count--;
      } else if (count === 0) break;
    }
    result.push(temp);
  }

  return result;
}
