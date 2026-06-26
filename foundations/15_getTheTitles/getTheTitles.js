const getTheTitles = function (books) {
// return books.reduce((titels,book)=> titels.push(book.title),[])
let titels = []
for (let index = 0; index < books.length; index++) {
    titels =titels.concat(books[index].title);
    
}
return titels

};


// [1,2].reduce()

// Do not edit below this line
module.exports = getTheTitles;
