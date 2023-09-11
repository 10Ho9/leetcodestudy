// https://leetcode.com/problems/lru-cache/description/

/**
 * @param {number} capacity
 */

// 시간복잡도 : O(1) 반복문을 사용하지 않고 key를 사용해 바로 값에 바로 접근이 가능해서 시간복잡도는 O(1)
// 공간복잡도 : O(n) 주어진 capacity 만큼의 map을 만들어서 사용해서 공간복잡도는 O(n)

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.freeSpace = capacity;
    this.map = new Map();
  }

/** 
 * @param {number} key
 * @return {number}
 */

  get(key) {
    const value = this.map.get(key);

    if (value === undefined) return -1;

    this.map.delete(key);
    this.map.set(key, value)

    return value;
  }

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.freeSpace <= 0) this.map.delete(this.map.keys().next().value);
    else this.freeSpace--;

    this.map.set(key, value);
  }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
