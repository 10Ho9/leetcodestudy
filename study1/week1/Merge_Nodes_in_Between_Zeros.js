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
// 공간복잡도 : O(1) 주어진 head를 사용해서 공간복잡도는 O(1)

function mergeNodes(head) {
  let temp = head;
  let currNode = head.next;

  while (currNode) {
    if (currNode.val == 0 && currNode.next !== null) {
      temp = temp.next
      temp.val = 0;
    } else if (currNode.val == 0 && currNode.next == null) {
      temp.next = null;
      break;
    } else {
      temp.val += currNode.val;
    }
    currNode = currNode.next;
  }
  return head;
}
