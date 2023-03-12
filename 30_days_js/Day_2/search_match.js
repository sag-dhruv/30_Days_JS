
// >>>>>> search method >>>>>>>> 
// takes string & re
// returns first match of string
let searchString = 'I love Love javascript';

// 1st scenario with only string
console.log(searchString.search('love')); // 2
console.log(searchString.search('Love')); // 7

// 2nd scenario with re
console.log(searchString.search(/love/i)); //2


// >>>>>> match method >>>>>>>>
// takes string & re
// returns array

let string = 'I love Love javascript';
console.log(string.match('love'));
// ['love', index: 2, input: 'I love Love javascript', groups: undefined]

console.log(string.match(/love/gi));
// ['love', 'Love']