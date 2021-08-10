// function isLeapYear(year){
//     if(year%4==0){
//         console.log(year +"is a leap year");
//         if(y%100!=0){
//             console.log(year+"is a leap year");
//         }
//         else{
//             console.log(year+"is not a leap year");
//         }

//     }
//     else if(year%400==0){
//         console.log(year+"is a leap year");
//     }
//     else{
//         console.log(year+"is not a leap year");
//     }
// }
// console.log(isLeapYear(2000));

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                return ("Leap year.");
            } else {
                return ("Not leap year.");
            }
        } else {
            return ("Leap year.");
        }
    } else {
        return ("Not leap year.");
    }
}