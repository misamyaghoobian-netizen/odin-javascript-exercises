const sumAll = function(a,b) {
   if (typeof (a) !== "number" || typeof (b) !== "number" ) {return "ERROR"}
   if (a%1 !== 0 || b%1 !==0 ) {return "ERROR"} 
   if (a<b) { let i=a; let j=b } else { let i=b; let j=a }
   if (a<0 || b<0) {return "ERROR"} 
   if (a<=b) {return (a+b)*(b-a+1)/2} else { return (a+b)*(a-b+1)/2}

}


// Do not edit below this line
module.exports = sumAll;
