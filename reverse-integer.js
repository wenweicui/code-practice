/**
 * 
 * Reverse Integer
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: 120
 * Output: 21
 * 
 * @param {number} x
 * @return {number}
 */

//Accepted Runtime: 108 ms

var reverse = function(x) {
    const limit = 2147483648;
    let ans = parseFloat(x.toString().split('').reverse().join(''));
    if (ans > limit) {
        return 0;
    }
    return ans* Math.sign(x);
};