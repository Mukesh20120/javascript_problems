
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(a) {
    var ans=0;
    for(let i=0;i<a.length;i++){
        let sum=0;
        for(let j=0;j<a[i].length;j++){
            sum+=a[i][j];
        }
        if(sum>ans)
            ans=sum;     
    }
    return ans;
};