// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// 시간복잡도 : O(nlogn) sort함수를 사용해서 시간복잡도는 O(nlogn)
// 공간복잡도 : O(n) names의 길이 만큼 배열을 새로 만들어서 공간복잡도는 O(n)

function sortPeople(names, heights) {
  const peopleIndices = names.map((name, index) => index);

  peopleIndices.sort((a, b) => heights[b] - heights[a]);
  
  return peopleIndices.map(index => names[index]);
}
