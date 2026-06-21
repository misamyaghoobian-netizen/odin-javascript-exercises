const repeatString = function(str,num) {
    let arr = [];
if (num > 0) {
    for (let i = 0; i < +num; i++) {
        arr.push(str);
    };
    return arr.join("")
} else { if (num==0) {
    return ""
}
else {return `ERROR`}    
}


};

// Do not edit below this line
module.exports = repeatString;
