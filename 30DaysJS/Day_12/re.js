// regular expression methods

// 1) test()
// --> returns true if the string matches the regular expression
// --> Syntax:- test(regex, string)

const str = 'I love Love JavaScript'
const pattern = /Love/g
const result = pattern.test(str)
// console.log(result);

// 2) match()
// --> returns true if the string matches the regular expression
// Syntax:- match(regex, string)

const matchResult = str.match(pattern)
// console.log(matchResult);

// 3) search()
// --> returns the index of the first match
// Syntax:- search(regex, string)

const searchResult = str.search(pattern)
// console.log(searchResult);

// 4) replace()
// --> replaces the first match with the new string
// Syntax:- replace(regex, string)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchreplace = txt.replace(/Python/gi, 'JavaScript')
// console.log(matchreplace);

const tx = 'This regular expression example was made in December 6,  2019.'


// matches = tx.match(ptrn)
// console.log(matches);

// Exercise
// let s1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// const ptrn = /\d{4,}/g
// let matches = s1.match(ptrn)

// console.log(matches);
// let earn = 0;
// for(let s of matches){
//     earn += parseInt(s)
// }
// console.log(earn);
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const ptrn = /\w+/gi
let matches = paragraph.match(ptrn)
// console.log(matches);

const finalMatch = new Set(matches)
console.log(finalMatch);


const newArray = []
for(let s of finalMatch){
    const regex = new RegExp(s, "g");
    const count = (paragraph.match(regex)).length;

    newArray.push({ 'word': s, 'count': count })
}

console.log(newArray);
newArray.sort((a, b) => b.count - a.count)