//https://leetcode.com/problems/merge-nodes-in-between-zeros/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 시간복잡도 : O(n) 주어진 head의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 주어진 head의 크기 n, 최대 ⌊(n-1)/2⌋ 크기의 새로운 node를 생성해서 공간복잡도는 O(n)

function mergeNodes(head) {
  const result = new ListNode();
  let temp = result;
  let currNode = head.next;

  while (currNode) {
    if (currNode.val == 0 && currNode.next !== null) {
      temp.next = new ListNode();
      temp = temp.next
    } else {
      temp.val += currNode.val;
    }
    currNode = currNode.next;
  }
  return result;
}
