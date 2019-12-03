// function jediName (firstName, lastName) {
//     let first = firstName.slice(0,2);
//     let last = lastName.slice(0,3);
//     console.log(`${last}${first}`)
// }

// jediName("Scott", "Lingner");


// function beyond (num) {
//     if (num === Infinity || num === Number.NEGATIVE_INFINITY) {
//         console.log('And beyond');
//     } else if (typeof num === "number" && num > 0) {
//         console.log('To infinity');
//     } else if (typeof num === "number" && num < 0) {
//         console.log('To negative infinity');
//     } else if (num === 0) {
//         console.log('Staying home');
//     }
// }

// beyond(0)



// function decode (word) {
//     if (word[0] === "a") {
//         return word[1];
//     }
//     if (word[0] === "b") {
//         return word[2];
//     }
//     if (word[0] === "c") {
//         return word[3];
//     }
//     if (word[0] === "d") {
//         return word[4];
//     }
//     else {
//         return " ";
//     }
// }

// console.log(decode('craft'));
// console.log(decode('block'));
// console.log(decode('argon'));
// console.log(decode('meter'));
// console.log(decode('bells'));
// console.log(decode('brown'));
// console.log(decode('croon'));
// console.log(decode('droop'));


// function daysInMonth(month, leapYear = false) {
//     switch(month) {
//         case "September":
//         case "April":
//         case "June":
//         case "November":
//             console.log(`${month} has 30 days.`);
//         break;

//         case "January":
//         case "July":
//         case "August":
//         case "October":
//         case "March":
//         case "December":
//             console.log(`${month} has 31 days.`);
//         break;

//         case "February":
//             if(leapYear === true) {
//                 console.log(`${month} has 29 days.`);
//             } else {
//                 console.log(`${month} has 28 days.`);
//             }
//         break;

//         default:
//             console.log("must provide a valid month");
//         }
//     }

// daysInMonth("February", false);

function rockPaperScissorGame (num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if (num !== 1 || num !== 2 || num !== 3) {
        throw new Error ("Number must be 1, 2 or 3.");
    }

    if (randomNo > num) {
        return `Computer wins!`;
    }
    if (randomNo < num) {
        return `You win`;
    }
    if (randomNo === num) {
        return `It's a tie!`
    }
}
    
console.log(rockPaperScissorGame(40));