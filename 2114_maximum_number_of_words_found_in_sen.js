/**
 * @param {string[]} sentences
 * @return {number}
 */
var calspace=function(sen){
      let maxi=0;
 for(const s of sen){
     let cnt=0;
    for(const ch of s){
        if(ch==' ')
            cnt++;
    };
    if(cnt+1>maxi)
        maxi=cnt+1;
}
    return maxi;
}


//but here it take extra space to make an array to store words
var usingsplit=function(sen){
    let maxi=0;
    for(const s of sen){
    //assume one sentence is there
    const temp=s.split(" ").length; //split make an array of words and length give its size 
    if(temp>maxi)
        maxi=temp;
    }
    return maxi;
}


var usingsplitreduce=function(sen){
 return sen.reduce(function(acc,cur){
        return Math.max(acc,cur.split(' ').length)
    },0);
}


var mostWordsFound = function(sen) {
  return calspace(sen); // calculating space simply by loop
 //   return usingsplit(sen);
 // return usingsplitreduce(sen);
};