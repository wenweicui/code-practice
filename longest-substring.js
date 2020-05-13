/**
 * Longest Substring Without Repeating Characters
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * Example 2:
 * Input: "bbbbb"
 * Output: 1 
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 *  Input: "pwwkew" 
 * Output: 3 
 * Explanation: The answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * 
 */

 /**
 * @param {string} s "pwwkew"
 * @return {number} 3
 */

//method 1 Wrong Runtime: 88 ms
var lengthOfLongestSubstring1 = function(s) {
    if(s.length < 2) {
        return s.length;
    }
    for (let i = 0; i < s.length; i++) {
        let x = s.substr(i, 1);
        let count = 0;
        
        for (let j = 1; j < s.length; j++) {
            let y = s.substr(j, 1);
            if (y !== x ) {
                count ++;
            } else {
                return null;
            }
        }
    console.log(count)
    }
};

//method 2 Accepted Runtime: 96 ms

var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    console.log(hash)
    return max_len;
};



var test = lengthOfLongestSubstring("abcabcbb");