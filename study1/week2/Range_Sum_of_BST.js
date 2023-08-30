// https://leetcode.com/problems/range-sum-of-bst/description/

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// 시간복잡도 : O(n) 주어진 root의 길이 만큼 재귀함수가 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(1) sum변수 하나만 사용되기 때문에 공간복잡도는 O(1)

function rangeSumBST(root, low, high) {
  let sum = 0;
  const sumBST = (root) => {
    if (low < root.val && root.val < high) sum += root.val;
    if (root.left && low < root.val) sumBST(root.left);
    if (root.right && root.val < high) sumBST(root.right);
  }
  sumBST(root);
  return sum + low + high;
}
