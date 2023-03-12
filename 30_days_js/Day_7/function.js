// Types of Function
// 1. Anonymous Function
// They are without name. They are used to define a function. They are not used to call a function. 
// They are used to pass a function as an argument to another function. 
// They are used to return a function.

// 2. Named Function
// They are used to define a function. They are not used to call a function. They are used to pass a function as an argument to another function.

// 3. Arrow Function
// They are used to define a function. They are not used to call a function. They are used to pass a function as an argument to another function.   
// They are used to return a function.  

function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(10, 20))

const swapValues = (x, y) => {
    let temp = x;
    x = y;
    y = temp;
    return [x, y];
}

// console.log(swapValues(2, 3));


const reverseArray = (arr) => {
    const finalArray = [];
    console.log(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        finalArray.push(arr[i]);
    }
    return finalArray;

}

// console.log(reverseArray([1,2,3,4,5]));


const sumArray = (...arg) => {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}

console.log(sumArray(1, 2, 3));