const findTheOldest = function(people) {
return people.reduce((pervious,current) => {
    if (current.yearOfDeath==undefined) {
        
        current.yearOfDeath=thisYear }
    if ((pervious.yearOfDeath - pervious.yearOfBirth)>(current.yearOfDeath - current.yearOfBirth)) 
            { return pervious} else { return current}  },{yearOfDeath:0, yearOfBirth:0}) 



}

let thisYear =  new Date().getFullYear()


// Do not edit below this line
module.exports = findTheOldest;
