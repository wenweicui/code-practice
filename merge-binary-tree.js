/**
 * Given two binary trees and imagine that when you put one of them to cover the other, 
 * some nodes of the two trees are overlapped while the others are not.
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
 * then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */


var mergeTrees = function(t1, t2) {
    if (t1 !== null || t2  !== null) {
        var node = new TreeNode();
        if (t1 !== null && t1 !== undefined) {
            node.val = t1.val;
        } else {
            node.val = null;
        }
        if(t2 !== null) node.val += t2.val;
        node.left = mergeTrees ((t1 !== null) ? t1.left : null, (t2 !== null) ? t2.left : null);
        node.right = mergeTrees ((t1 !== null) ? t1.right : null, (t2 !== null) ? t2.right : null);
        return node;
    } else {
        return null;
    }
};