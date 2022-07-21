/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var res=[];//declare array
    res[0]=nums[0];
    for(let i=1;i<nums.length;i++){
        res[i]=res[i-1]+nums[i];
    }
    return res;
};

//other soltuion using reduce method
var runningSum = function(nums) {
    nums.reduce((a,_,i,arr)=>arr[i]+=a)
    return nums;
};