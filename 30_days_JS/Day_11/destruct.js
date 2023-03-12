// destruct the array
// -->unpack the array

const arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e);

const numbers = [1, 2, 3]
let [...num1] = numbers;
// console.log(num1);

// destruct the object
// -->unpack the object

// const person = {
//     fullname: 'John',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     address: {
//         city: 'New York',
//         state: 'NY'
//     },
//     temp: ''
// }

// let { fullname, hobbies, address,temp='Fahrenhit' } = person;
// console.log(fullname,hobbies,address,temp);

// object parameter withouth destructuring
// const rect = {
//     width: 10,
//     height: 20,
// }

// const calculatePerimeter = ({ width, height }) => {
//     return 2 * (width + height);

// }

// console.log(calculatePerimeter(rect));

// const person = {
//     fullname: 'John',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     address: {
//         city: 'New York',
//         state: 'NY'
//     }
// }

// const getPersonInfo = ({ fullname, age, address }) => {
//  return `My name is ${fullname} & I am ${age} years old and lives in ${address.city}, ${address.state}`;   
// }

// console.log(getPersonInfo(person));

// Spread operator with arrow function
// If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
// const sumNums = (...nums) => {
//     console.log(nums);
// }

// console.log(
//     sumNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// );

// Exerecise

// const constants = [2.72, 3.14, 9.81, 37, 100]
// let [ei, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(ei, pi, gravity, humanBodyTemp, waterBoilingTemp);

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

let finalUsers = ''
// Object.values(users).forEach(value => {
for (const [k, v] of Object.entries(Object.values(users))) {
    Object.keys(v).filter((key) => {
        if (key == 'skills' && v[key].length < 2) {
            finalUsers += users[k].name
        }
    }
    )
}

// console.log(finalUsers);

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]


const convertArrayToObject = (arr) => {
    const obj = []
    for (let i = 0; i < arr.length; i++) {
        const [name, skills, scores] = arr[i]
        obj.push({ name, skills, scores })
    }
    return obj
}
const finalObj = convertArrayToObject(students);
console.log(finalObj);

const newStudent = { ...finalObj[0] }

newStudent['age'] = 22;
newStudent['skills'] = {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }

newStudent['skills']['frontEnd'].push({'skill': 'Bootstrap', 'level': 8})
newStudent['skills']['backEnd'].push({'skill': 'Express', 'level': 9})
newStudent['skills']['dataBase'].push({'skill': 'SQL', 'level': 8})
newStudent['skills']['dataScience'].push('SQL')

console.log(newStudent);
