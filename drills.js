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



function decode (word) {
    // let a = word.charAt(2);
    // let b = word.charAt(3);
    // let c = word.charAt(4);
    // let d = word.charAt(5);
    let firstLetter = word.charAt(0);
    let decodeLetter = word.charAt(firstLetter);
    if (typeof firstLetter > "d") {
        console.log(" ");
    } else {
        console.log(decodeLetter);
    }
}

decode("Mouse");