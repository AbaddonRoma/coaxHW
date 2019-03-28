/**
 * FIRST
 */
let sumOfMultiples = (maxNumber) => {
    let sum = 0;
    for(let i=1; i<maxNumber; i++) {
        if( (i%3) === 0 || (i%5) === 0 ) {
             sum+=i;
        }
    }
    return sum;
}

// console.log(...sumOfMultiples(10));

/**
 * SECOND
 */
let fibonacciSequence = (firstNum, secondNum, count) => {
    var sequence = [firstNum, secondNum];

    for(let i=2; i < count + 1; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    
    return sequence;
}
// console.log(...fibonacciSequence(2,3,5));


/**
 * THIRD
 */

let rotArray = (a, d) => {
    let rotatedArr = [];
    let shiftedNumbs = []
    a.forEach((el, i) => {
        i < d ? shiftedNumbs.push(el) : rotatedArr.push(el);
    });
    return [...rotatedArr,...shiftedNumbs];
}

// console.log(rotArray([1,2,3,4,5], 2));


