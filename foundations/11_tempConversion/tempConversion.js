const convertToCelsius = function(f) { 
return Math.round((f-32)*(5/9))
//  if (((f-32)*(5/9) * 10)%1 <= - 0.5 )  { return   Math.floor( (f-32)*(5/9) * 10)/10 }
//  if (((f-32)*(5/9) * 10)%1 <  0 )  { return   Math.floor( (f-32)*(5/9) * 10)/10 +0.1}
//   if (((f-32)*(5/9) * 10)%1 <=  0.5 )  { return   Math.floor( (f-32)*(5/9) * 10)/10 }
//    else  { return   Math.floor( (f-32)*(5/9) * 10000)/10000 +0.1}
  



};

const convertToFahrenheit = function(c) { return Math.round((c*1.8)+32)


//  if ((((c*1.8)+32)*10)%1 > -0.5 && (((c*1.8)+32)*10)%1 < 0)  { return  Math.floor(((c*1.8)+32)*10)/10 - 0.1} 
//   if ((((c*1.8)+32)*10)%1 <= -0.5 )  { return  Math.floor(((c*1.8)+32)*10)/10 }
//    if ((((c*1.8)+32)*10)%1 < 0.5)  { return  Math.floor(((c*1.8)+32)*10)/10 }
//     else   { return  (Math.floor(((c*1.8)+32)*10))/10 + 0.1}   
 
   
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
