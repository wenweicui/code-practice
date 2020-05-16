/**
 * Longest Palindromic Substring
 * Level: Medium
 * 
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
 * 
 * @param {string} s
 * @return {string}
 */

//  Brute Force Accepted Runtime: 92 ms Time complexity : O(n^3)
var longestPalindrome = function(s) {
    let ans = "";
    if (s.length < 2) {
        return "Input too short"
    }
    for (let i = 0; i < s.length; i++) {
        let x = s.substr(i, 1);
        for (let j = 1; j < s.length; j++) {
            let curr = 0;
            let y = s.substr(j, 1);
            console.log(x, y)
            if (x == y) {
                ans = s.substr(i, j + 1);
                break;
            }
        }
        if (ans !== "") {
            return ans;
        } else {
            continue;
        }
    }
};