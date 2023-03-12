// class Person {
//     constructor(name = 'Dhruv', title = 'hacker',age='26', country = 'India') {
//         this.name = name;
//         this.title = title;
//         this.country = country;
//         this.age = age;
//         this.skills = []

//     }
//     getFullName() {
//         return `${this.name} is ${this.title}`
//     }
//     // getter methods
//     get getTitle() {
//         return this.title;
//     }

//     get getCountry() {
//         return `${this.name} lives in ${this.country}`;
//     }

//     // setter methods
//     set setCountry(country) {
//         this.country = country;
//     }

//     // static method
//     static favoriteSkill() {
//         const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//         const index = Math.floor(Math.random() * skills.length)
//         return skills[index]
//     }
// }

// person = new Person()
// // console.log(Person.favoriteSkill());
// // console.log(person);
// // console.log(person.getFullName());
// // console.log(person.getTitle);
// person.setCountry = 'Germany'
// // console.log(person.getCountry);


// // Inheritance

// class Student extends Person {
//     constructor(name, title,age, country, gender) {
//         super(name, title,age, country)
//         this.gender = gender;

//     }
//     saySomething() {
//         console.log('I am child of person class');
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()

//         let pronoun = this.gender == 'Male' ? 'He' : 'She'

//         let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.country}.`
//         return info
//     }
// }

// const s1 = new Student('Asabeneh', 'Yetayeh',26, 'Finland')
// // console.log(s1);
// // console.log(s1.getCountry);
// console.log(s1.getPersonInfo());
// console.log(s1.saySomething());


class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName() {
        return this.name
    }

    set setName(name) {
        this.name = name;
    }

    getInfo() {
        return `Name is ${this.name}, color is ${this.color} and have ${this.legs} legs.`
    }
}

const dog = new Animal('Pitbull', 5, 'grey', 4)
dog.setName = 'Shepherd'
// console.log(dog.getName);

// console.log(dog.getInfo());


class Statistics {
    constructor(arr) {
        this.arr = arr
    }

    count() {
        return this.arr.length
    }

    sum() {
        let sum = 0;
        for (const ele of this.arr) {
            sum += ele;
        }
        return sum
    }

    min() {
        return Math.min(...this.arr)
    }

    max() {
        return Math.max(...this.arr)
    }
    range() {
        return Math.max(...this.arr) - Math.min(...this.arr)
    }
    median() {
        this.arr.sort((a, b) => a - b)
        const index = Math.floor(this.arr.length / 2)
        return this.arr[index]
        // return (Math.floor(statistics.sum() / statistics.count()))
    }

    mode() {
        const mode = {};
        let count = 0, max = 0;
        for (let i = 0; i < this.arr.length; i++) {
            // console.log(this.arr[i]);
            const item = this.arr[i];

            if (mode[item]) {
                // console.log(mode[item]);
                mode[item]++;
            } else {
                mode[item] = 1;
            }
            // console.log(mode);

            if (count < mode[item]) {
                max = item;
                count = mode[item];
            }
        }
        return mode;


    }
}
const statistics = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
// console.log(statistics.count());
// console.log(statistics.sum());
// console.log(statistics.min());
// console.log(statistics.max());
// console.log(statistics.range());
// console.log(statistics.sum());
console.log(statistics.median());
// console.log(statistics.mode());
