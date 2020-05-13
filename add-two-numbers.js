/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse
 * order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1 [2, 4, 3]
 * @param {ListNode} l2 [5, 6, 4]
 * @return {ListNode} [7, 0, 8]
 */

var addTwoNumbers = function(l1, l2) {
    var result = [];
    let y = 0;
    if (l1.length >= l2.length) {
        for (let i = 0; i < l1.length; i++) {
            let x = 0;
            x = l1[i] + l2[i] + y;
            if (x >= 10) {
                x -= 10;
                y = 1;
            } else {
                y = 0;
            }
            console.log(x);
            result.push(x);
        }
    } else {
        for (let i = 0; i < l2.length; i++) {
            let x = 0;
            x = l1[i] + l2[i] + y;
            if (x >= 10) {
                x -= 10;
                y = 1;
            } else {
                y = 0;
            }
            console.log(x);
            result.push(x);
        }
    }
    console.log(result);
    return result.map;
};

var test = addTwoNumbers([2,4,3],[5,6,4]);

