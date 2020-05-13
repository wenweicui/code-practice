/**
 * 
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * 
 * Example 1:
 * nums1 = [1, 3] 
 * nums2 = [2]
 * The median is 2.0
 * 
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//Accepted Runtime: 108 ms

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr = arr.sort(function(a,b){return a - b})
    let i = arr.length / 2;
    console.log(arr)
    let ans = 0;
    if (i%1 !== 0) {
        ans = arr[ i - i%1 ]
    } else {
        ans = (arr[i - 1] + arr[i])/2
    }
    return ans;
};