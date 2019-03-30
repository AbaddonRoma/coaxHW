/**
 *  FIRST
 */
var counter = (function () {
    var a = 0;
    function inc() {
        return a++;
    }
    return inc;
})()

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


/**
 *  SECOND
 */

 var arrAcumulator = (function() {
    var arr = [];
    if(arr.length >= 100) {
        console.log("Sorry you can't add any more, your array is full");
        return arr;
    }
    return function() {
        arr.push(Math.floor(Math.random() * 100));
        return arr;
    }
 })()

//  console.log(arrAcumulator());
//  console.log(arrAcumulator());
//  console.log(arrAcumulator());
//  console.log(arrAcumulator());
//  console.log(arrAcumulator());

 var coub  = (num1) => {
    return (num2) => {
        return (num3)=> {
            return num1 * num2 * num3;
        }
    }
    
 }

//  console.log(coub(3)(3)(3));