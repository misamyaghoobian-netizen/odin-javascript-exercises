const fibonacci = function(n) {
if (+n < 0 ) {
    return "OOPS"
}
if (+n==0) {
    return 0
}
let a = 1;
let b = 1;
let t=1;
    for (let i = 2; i < +n; i++) {
        t=a+b;
        a=b;
        b=t;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
