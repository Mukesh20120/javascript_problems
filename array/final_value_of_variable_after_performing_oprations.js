/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(o) {
    let x=0;
//     for(let i=0;i<o.length;i++){
//         if(o[i]==="X++" || o[i]==="++X")
//             x++;
//         else
//             x--;
//     }
    
    //other way of running loop
    let a;
    for(a of o){
        if(a==="X++" || a==="++X")
            x++;
        if(a==="--X" || a==="X--")
            x--;
    }
    
    return x;
};