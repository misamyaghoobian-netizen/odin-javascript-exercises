const palindromes = function (string) {
    let loString = string.toLowerCase()
    let aLoString = loString.replaceAll(" ", "")
    let bLoString = aLoString.replaceAll(",", "")
    let dLoString = bLoString.replaceAll(".", "")
    let cLoString = dLoString.replaceAll("!", "")
return isEq(Array.from(cLoString).reverse(), Array.from(cLoString)) 
};
function isEq(arr1,arr2) {
    if (arr1.length!==arr2.length) { return false }
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index]!==arr2[index]) {return false}    
    }
    return true;
}
        

// Do not edit below this line
module.exports = palindromes;
