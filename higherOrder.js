// function repeat(fn, n) {
//    for(let i = 0; i < n; i++) { //repeat loops n times (i < n)
//        fn(n[i], i); // each iteration of the loop(n[i]) calls fn. 
//    };
// }

// function hello () {
//     console.log('Hello world');
// }

// function goodbye() {
//     console.log('Goodbye world');
// }

// repeat(hello, 5);
// repeat(goodbye, 5);

function filter(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}


// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//     // This is known as a "predicate function" - it's a function that 
//     // only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES


// function hazardWarningCreator (typeOfWarning) {
//     let warningCounter = 0;
//     return function(location) {
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//     }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const earthQuakeWarning = hazardWarningCreator('Ground is crumbling!');
// const floodWarning = hazardWarningCreator('Water is rising!');

// rocksWarning("Fourth and Howard");
// rocksWarning("Broadway and Divisadero");
// rocksWarning("Gough and Sunset");
// earthQuakeWarning("Folsom and Hawthorne");
// earthQuakeWarning("Bryant and Post");
// floodWarning("Pipilo and Salmon River Road");
// floodWarning("18th and Howard");

// let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// turtleSteps.filter(function([step1, step2]){ 
//     return step1 >= 0 && step2 >= 0; 
// });

// turtleSteps.map(function([step1, step2]) {
//     return step1 + step2;
// });

// turtleSteps.forEach(function([step1, step2]) {
//     return `Movement #1: ${step1} steps Movement #2: ${step2} steps`;
// });

let myArray = ["noggin", "oreo", "the", "moon", "time", "tele", "steed", "his", "tent", "apollo", "her", "lives", "though", "shoo", "tofu", "budapest"];
//convert the input into an array

myArray.reduce(function([word]) {
    let initialValue = ""; // set initValue parameter to an empty string so future iterations can concatenate
    for(let i = 0; i < myArray.length; i++) {
        if (word.length[i] === 3) { //if array is exactly three characters long, add a space
            return " ";
        } else {
        return initialValue.charAt(-1).toUpperCase(); //otherwise, capitalize the LAST character of the array element
        }
    }
});

console.log(myArray);
