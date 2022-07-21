/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const len=nums.length;
   //declare using object var ans = new Array();
    var ans=[];
    for(let i=0;i<len;i++)
        ans[i]=nums[nums[i]];
    return ans;
};