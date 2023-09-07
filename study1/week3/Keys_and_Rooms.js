// https://leetcode.com/problems/keys-and-rooms/description/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

// 시간복잡도 : O(n + k) 주어진 room의 개수와 열쇠의 개수 만큼 반복문이 실행 되어서 시간복잡도는 O(n + k)
// 공간복잡도 : O(n) 최악의 경우 스택의 길이는 중복되지 않는 열쇠의 개수(n-1)와 같다. 결국 방의 개수 -1과 같기 때문에 공간복잡도는 O(n)

function canVisitAllRooms(rooms) {
  const hasKeys = new Array(rooms.length);
  const stack = [rooms[0]];
  hasKeys[0] = true;

  while (0 < stack.length) {
    let currentRoom = stack.pop();

    for (let i = 0; i < currentRoom.length; i++) {
      let key = currentRoom[i];
      if (0 < key && hasKeys[key] === undefined) {
        hasKeys[key] = true;
        stack.push(rooms[key]);
      }
    }
  }
  
  return !hasKeys.includes(undefined);
}
