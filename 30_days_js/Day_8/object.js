// if (true){
//     var gravity = 9.81
//     console.log(gravity);

//   }

//   console.log(gravity);

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

// console.log(person.getFullName());

// Object methods

// 1) Object.assign()
// It is used to copy properties from one object to another without mutating the original object.
// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);

// 2) Object.keys()
// It is used to get the keys of an object as an array.

// const keys = Object.keys(person);
// console.log(keys);


// const values = Object.values(person);
// console.log(values);

// const entries = Object.entries(person);
// console.log(entries);

// console.log(person.hasOwnProperty('name'));

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const noUsers = Object.keys(person).length;
// console.log(noUsers);
var points = [];
var count = 0;
for (const user in users) {
  // console.log(`User: ${user}`);
  for (const key in users[user]) {
    if (key == 'points') {
      if (users[user][key] >= 50) {
        count += 1;
      }
    }
  }
}

// console.log(count);


// for (const user in users) {
//   for (const key in users[user]) {
//     if (key == 'skills') {
//       const techs = ['MongoDB', 'Express', 'React', 'Node'];
//       const userSkills = users[user][key];
//       const ele = techs.every(element => userSkills.includes(element));
//       if (ele) {
//         console.log(user);
//       }
//     }
//   }
// }

const anotherUser = Object.assign({}, users);
console.log(anotherUser);

for (const k of Object.keys(anotherUser)) {
  if (k == 'Alex') {
    const oldkey = k;
    const newKey = 'Dhruv';
    // console.log(anotherUser[oldkey]);
    anotherUser[newKey] = anotherUser[oldkey];
    delete anotherUser[oldkey];
  }
}

console.log(anotherUser);