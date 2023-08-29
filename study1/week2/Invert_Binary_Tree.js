// https://leetcode.com/problems/invert-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 시간복잡도 : O(n) 주어진 root의 길이 만큼 재귀반복이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) 주어진 root에서 위치만 바뀌어서 공간복잡도는 O(1)

function invertTree(root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
