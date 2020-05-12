/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9, 
 * return [0, 1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//method 1 Accepted Runtime: 68 ms

var twoSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++ ) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            } else {
                return null;
            }
        }
    }
};


//method 2 Accepted Runtime: 56 ms

var twoSum2 = function(nums, target) {
    let map = new Map;
    for (let i = 0; i < nums.length; i++ ) {
        let x = target - nums[i];
        if (map.has(x)) {
            return [map.get(x), i]
        }
        map.set(nums[i], i);
    }
};