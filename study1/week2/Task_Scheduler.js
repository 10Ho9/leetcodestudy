// https://leetcode.com/problems/task-scheduler/description/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

/** 시간복잡도 : O(n) 주어진 tasks의 길이만큼 반복문이 실행 되어서 시간복잡도는 O(n)
*                  정렬 알고리즘을 사용하지만 고정적인 길이(26)에 대해서 정렬 하기 때문에 상수와 같음
*
*   공간복잡도 : O(n) 항상 고정적인 길이의 배열을 생성하지만 in-place가 아니므로 공간복잡도는 O(n)
*/                

function leastInterval(tasks, n) {
  const taskTable = Array.from({length: 26}, () => 0);
  const tasksLength = tasks.length;
  tasks = new TextEncoder().encode(tasks);

  for (let i = 0; i < tasks.length; i++) {
    taskTable[tasks[i] - 65] += 1;
  }

  tasks = taskTable.filter(((task) => task !== 0));
  tasks.sort((a, b) => b - a);
  
  const maxCount = tasks[0];
  let idleCount = (maxCount - 1) * n;
   
  for (let i = 1; i < tasks.length; i++) {
    if (0 < idleCount) {
      if (tasks[i] === maxCount) idleCount -= tasks[i] - 1;
      else idleCount -= tasks[i];
    } else {
      idleCount = 0;
    }
  }
 

  return tasksLength + idleCount;
}
