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

// 시간복잡도 : O(n) 주어진 root의 길이 만큼 반복문이 실행 되어서 시간복잡도는 O(n)
// 공간복잡도 : O(n) 최대 주어진 root의 길이 만큼 배열이 사용 되어서 공간복잡도는 O(n)

function invertTree(root) {
  const restNodes = [root];

  while (0 < restNodes.length) {
    let currentNode = restNodes.pop();
    if (currentNode) {
      [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];
      restNodes.push(currentNode.right);
      restNodes.push(currentNode.left);
    }
  }
  return root;
}
