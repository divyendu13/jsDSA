/**
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are 
 * (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 In this case, the max area of water (blue section) the container can contain is 49.
 */

 var maxArea = function(height){
    let left=0
    let right=height.length-1
    let area=0
    let y=0
    while(right>left){
        y=Math.min(height[left],height[right])
        x=right-left
        area=Math.max(area,x*y)
        if(height[left]<height[right]){
            left++
        }
        else right--
    }
    return area
 }

 console.log(maxArea([1,8,6,2,5,4,8,3,7]))