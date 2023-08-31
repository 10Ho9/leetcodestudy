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

// 시간복잡도 : O(n) 주어진 root의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 최대 주어진 root의 길이 만큼 배열이 사용되기 때문에 공간복잡도는 O(n)

function rangeSumBST(root, low, high) {
  let sum = 0;
  let restNodes = [root];

  while (0 < restNodes.length) {
    root = restNodes.pop();
    if (root) {
      if (root.val < low) root.left = null;
      else if (high < root.val) root.right = null;
      else sum += root.val;

      restNodes.push(root.left);
      restNodes.push(root.right);
    } 
  }
  return sum
}
