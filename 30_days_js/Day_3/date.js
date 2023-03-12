let basePrompt = prompt(' Enter the base of the triangle : ');
let heightPrompt = prompt(' Enter the height of the triangle : ');

console.log(basePrompt);
console.log(heightPrompt);

var base = parseInt(basePrompt);
var height = parseInt(heightPrompt);


console.log(`Area of triangle is ${base * height/ 2}`);