// Callback function
// a callback function, the name of the function could be any name
// const callback = (n) => {
//   return n ** 2
// }

// // function that takes other function as a callback
// function cube(callback,n){
//   return callback(n)
// }
// console.log(cube(callback,3));
// const numbers = [1, 2, 3, 4]

// const add = (arr) => {
//   let sum = 0;
//   arr.forEach((number) => {
//     sum += number;
//   })
//   return sum;
// }

// map is a function that takes a callback function and returns a new array
// It takes a callback function with elements, index , array parameter and return a new array.
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// const newCountries = countries.map((country) => country.toUpperCase())
// console.log(newCountries);

// filter
// Filter out items which full fill filtering conditions and return a new array.
// const filterCountries = countries.filter((country) => country.includes('land'))
// console.log(filterCountries);

// reduce
// reduce is a function that takes a callback function and returns a new array.
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function (accumulator, currentValue) {
    // console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, 0)
// console.log(sum);

// every   
// // Check if all items in the array are true
// const areStr = countries.every((country) =>typeof country === 'string')
// console.log(areStr);

const ages = [24, 22, 25, 24, 35, 18]
// const age = ages.find((age) => age >= 23)
// console.log(age);

// some
// Check if at least one item in the array is true
const isAdult = ages.some((age) => age < 18)
// console.log(isAdult);

const nos = [9.81, 3.14, 100, 37]

nos.sort((a, b) => a - b)
// console.log(nos);


// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]

// users.sort((a, b) => a.age - b.age)
// console.log(users);
const six = countries.filter((country) => country.length >= 6)
// console.log(six);

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//   const newProducts = products.filter((product) => typeof product.price === 'number')
//   console.log(newProducts);

const newProducts = products.map((product) => product.price)
.filter((price) => typeof price === 'number').reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(newProducts);
// ).filter((product) => typeof product.price === 'number')

console.log(newProducts);