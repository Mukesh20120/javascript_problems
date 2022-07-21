/**
 * @param {number[]} nums
 * @return {number}
 */
var using2loop=function(nums){
     let ans=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j])
                ans++;
        }
    }
    return ans;
}

var usingmap=function(nums){
    //1 make a map store key and freq of all element
    //2 iterate through map and use formula n*(n-1)/2 to calculate
    //no of pair made by it
    //3 return sum
    
    const freq={}; 
    for(const n of nums){
        if(freq[n])
            freq[n]++;
        else
            freq[n]=1;
    }
    let cnt=0;
    for(let k in freq){
        if(freq[k]>1)
            cnt+=(freq[k]*(freq[k]-1)/2);
    }
    return cnt;
}

var numIdenticalPairs = function(nums) {
   return usingmap(nums);
};