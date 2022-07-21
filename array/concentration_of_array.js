/*
loop solution
 */
var getConcatenation = function(nums) {
   const ans=[];
    let sz=nums.length;
    for(var i=0;i<sz;i++){
        ans[i]=nums[i];
        ans[i+sz]=nums[i];
    }
    return ans;
};

//optimal solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  return [...nums,...nums];  
};