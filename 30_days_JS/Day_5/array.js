// >>>>fill()>>>>>>
// fill() method is used to fill the array with a specified value.
// SYNTAX: fill(value, start, end)

let arr = ['1', '2', '3'];
let temp = arr.fill(0); // [0,0,0]

// >>>>concat()>>>>>>
// concat() method is used to concatenate two or more arrays.


const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

// console.log(thirdList); // [1, 2, 3, 4, 5, 6]

//>>>length()>>>>>>
// length() method is used to get the length of an array.
// SYNTAX: length(array)

const numbers = [1, 2, 3, 4, 5, 1]
// console.log(numbers.length); // 5


// <<<indexOf()>>>
// indexOf() method is used to get the index of the first occurrence of a specified value in an array.  
// SYNTAX: indexOf(value, start, end)

// console.log(numbers.indexOf(3)); // 0


// <<includes()>>>
// includes() method is used to determine whether an array includes a certain element, returning true or false as appropriate.  
// SYNTAX: includes(value, start, end)
// console.log(numbers.includes('3'));


// <<lastIndexOf()>>>
// lastIndexOf() method is used to get the index of the last occurrence of a specified value in an array.
// SYNTAX: lastIndexOf(value, start, end)
// console.log(numbers.lastIndexOf(1)); // 4


// <<isArray()>>
// isArray() method is used to determine whether a variable is an array.
// SYNTAX: Array.isArray(variable)

// console.log(Array.isArray(numbers)); // true

// << toString() >>
// toString() method is used to convert an array to a string.
// SYNTAX: toString(array)
// console.log(numbers.toString()); // [1, 2, 3, 4, 5, 1]

// <<join()>>
// join() method is used to join all elements of an array into a string.
//  By default it joins with a comma.
// SYNTAX: join(separator, array) 
// console.log(numbers.join('#')) // 1#2#3#4#5#1


// <<slice()>>
// slice() method is used to extract a section of an array.
// SYNTAX: slice(start, end)
// console.log(numbers.slice);

// <<splice()>>
// splice() method is used to insert or remove elements from an array.
// SYNTAX: splice(start, deleteCount, item1, item2, ...)

let n1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers.splice(1,3));  // [2, 3, 4]

// console.log(n1.splice(3, 3, 7, 8, 9)); //   [4,5,6]
// console.log(n1); // [1,2,3,7,8,9,7]

// <<push()>>
// push() method is used to add one or more elements to the end of an array and returns the new length of the array.
// SYNTAX: push(item1, item2, ...)
let fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.push('grapes','pineapple');
// console.log(fruits);   // ['apple', 'banana', 'orange', 'mango', 'grapes', 'pineapple']

// <<pop()>>
// pop() method is used to remove the last element from an array and returns that element.
// SYNTAX: pop()
// console.log(fruits.pop()); // 'pineapple'
// console.log(fruits);   // ['apple', 'banana', 'orange', 'mango', 'grapes']


// <<shift()>>
// shift() method is used to remove the first element from an array and returns that element.
// SYNTAX: shift()
// console.log(fruits.shift()); // 'apple'
// console.log(fruits);   // ['banana', 'orange', 'mango', 'grapes']


// <<unshift()>>
// unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array.
// SYNTAX: unshift(item1, item2, ...)
// console.log(fruits.unshift('lemon','kiwi')); 
// console.log(fruits);   // ['lemon', 'kiwi', 'apple', 'banana', 'orange', 'mango', 'grapes']

// <<reverse()>>
// reverse() method is used to reverse the order of the elements in an array.
// SYNTAX: reverse()

let rarr = ['1', '2', '3', '4', '5'];
// console.log(rarr.reverse()); // ['5', '4', '3', '2', '1']


// <<sort()>>
// sort() method is used to sort the elements of an array in ascending order.
// SYNTAX: sort() 
const languages = ['Python','Javascript','C++','C','C#','Java','PHP'];
// console.log(languages.sort()); // ['C', 'C#', 'C++', 'Java', 'Javascript', 'PHP', 'Python']

// <<Array of Array>>
const frontEnd = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [frontEnd, backEnd];
// console.log(fullStack); 

// console.log(languages.shift()); // 'Python'
let middleIndex = Math.floor(languages.length / 2);
// console.log(languages[middleIndex]); // 'C'
// console.log(languages.pop()); 

const MNC = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

// console.log(`${MNC.toString()} are big IT companies.`)
// var ooCompany = '';
// for(var i =0;i<MNC.length;i++){
//     if(MNC[i].includes('oo')){
//         ooCompany+=MNC[i]+' ';
//     }
// }
// console.log(ooCompany);


let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


let finalText = text.replace(/[^\w\s]/gi, '');
console.log(finalText.split(' ').length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');

if(!shoppingCart.includes('Sugar')){
 shoppingCart.push('Sugar');
}
console.log(shoppingCart);

let teaIndex = shoppingCart.indexOf('Tea');
console.log(teaIndex);

shoppingCart[teaIndex] = 'Green Tea';

console.log(shoppingCart);