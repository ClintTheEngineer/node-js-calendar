'use strict'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const monthIndex = currentDate.getMonth()
const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const leapDay = (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) ? 29 : 28;
const daysArray = [31,leapDay,31,30,31,30,31,31,30,31,30,31];
const date = currentDate.getDate();
Number.prototype.monthNumbers = function(){
    let monthIndex = [];
    let i = 1;
    while(monthIndex.length < this){
        monthIndex.push(i);
        i++
    }
    return monthIndex;
}
const month = monthsArray[monthIndex];
const year = new Object;
for(let months in monthsArray){
    year[monthsArray[months]] = daysArray[months].monthNumbers();
}

