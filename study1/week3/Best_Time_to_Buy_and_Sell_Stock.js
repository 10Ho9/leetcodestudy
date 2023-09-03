// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 prices의 길이 - 1 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) maxProfit, min 변수 2개만 사용하므로 공간복잡도는 O(1)

function maxProfit(prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if(prices[i] < min) min = prices[i];
    else maxProfit = maxProfit < prices[i] - min ? prices[i] - min : maxProfit;
  }
  return maxProfit;
}
