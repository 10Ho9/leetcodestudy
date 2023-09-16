// https://leetcode.com/problems/fair-candy-swap/

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */

// 시간복잡도 : O(a + b) aliceSizes의 길이를 a, bobSizes의 길이를 b, 최대 2a 혹은 a + b만큼 실행 되어서 시간복잡도는 O(a + b)
// 공간복잡도 : O(b) b의 길이 만큼 map을 만들어서 공간복잡도는 O(b)

function fairCandySwap(aliceSizes, bobSizes) {
  let diff = 0;
  const length = aliceSizes.length < bobSizes.length ? bobSizes.length : aliceSizes.length;
  const bobsMap = new Map();

  for (let i = 0; i < length; i++) {
    diff -= aliceSizes[i] === undefined ? 0 : aliceSizes[i];

    if (bobSizes[i] !== undefined) {
      diff += bobSizes[i];
      bobsMap.set(bobSizes[i], 0);
    }
  }

  diff = diff / 2;

  for (const alice of aliceSizes) {
    if (bobsMap.has(alice + diff)) return [alice, alice + diff];
  }
}
