// https://leetcode.com/problems/time-needed-to-inform-all-employees/submissions/?source=submission-noac

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 manger의 크기 만큼 재귀함수가 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 주어진 n만큼 새로운 배열을 생성해서 공간복잡도는 O(n)

function numOfMinutes(n, headID, manager, informTime) {
  const organizationTree = Array.from({length: n}, () => []);
  let result = 0;

  for (let employer = 0; employer < n; employer++) {
    if (employer !== headID) organizationTree[manager[employer]].push(employer);
  }

  return dfs(headID, informTime, organizationTree);
}

function dfs(node, informTime, organizationTree) {
  let max = 0;

  if (organizationTree[node]) {
    for (const employer of organizationTree[node]) {
    max = Math.max(max, dfs(employer, informTime, organizationTree));  
    }
  }

  return max + informTime[node];
}
