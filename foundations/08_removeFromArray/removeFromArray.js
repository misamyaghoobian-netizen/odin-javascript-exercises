const removeFromArray = function(arr,...theArgs) {
   for (let j = 0; j < theArgs.length; j++) {
      
    for (let i = 0; i < arr.length; i++) {

        if (arr.findIndex(n => n===theArgs[j])!==-1) {
      arr.splice(arr.findIndex(n => n===theArgs[j]),1)      
        } 
    }
}
 return arr
};





const removeFromArray2 = function(arr,...theArgs) {
   let Arr = arr.slyce();
for (let i = 0; i < theArgs.length; i++) {
Arr = arr.filter(n=>!(arr.includes(theArgs[i])))    
    
}



 return Arr;

 
};





// Do not edit below this line
module.exports = removeFromArray;
