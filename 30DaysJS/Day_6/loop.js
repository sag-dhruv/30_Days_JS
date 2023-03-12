// let sumPositive = 0;
// let sumNegative = 0;
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0 ){
//         sumPositive += i;
//     }
//     else{
//         sumNegative += i;
//     }
// }

// const finalArray = [];
// finalArray.push(sumPositive, sumNegative);
// console.log(finalArray);

// console.log(Math.random());
// let randomArray = [];
// for(let i = 0; i <= 5; i++){
//     randomArray.push(Math.random());    
// }
// console.log(randomArray);


// generate a six alphabets random id
// const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   let id = '';
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     console.log(randomIndex);
//     id += chars[randomIndex];
//   }
//   console.log(id);

// //   generate a random hexadecimal number
//   const hex = '0123456789abcdef';
//   let hexadecimal = ''; 
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * hex.length);
//     hexadecimal += hex[randomIndex];        
//   }
//   console.log('#' + hexadecimal);

// // generates a random rgb color number
// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);   
// const b = Math.floor(Math.random() * 256);
// console.log('rgb(' + r + ',' + g + ',' + b + ')');


// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

// let lengthCountry = []
// for(const country of countries){
//     lengthCountry.push(country.length);
// }
// console.log(lengthCountry);

// let finalArray = [];
// for(const country of countries){
//     finalArray.push([country, country.slice(0,3).toUpperCase(),country.length]);
// }
// let landCountry = [];
// let withoutland = [];
// for(const country of countries){
    
//     if(country.toLowerCase().endsWith('ia'))
//     {
//         landCountry.push(country);
//     }
//     else{
//         withoutland.push(country);
//     }
// }
// console.log(landCountry);
// console.log(withoutland);

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// let finalstr = fullStack.toString().replace(/[^\w\s]/gi, '\n');
// console.log(finalstr);
// let longestWord = '';
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].length > longestWord.length){
//         longestWord = countries[i];
//     }
// }

// console.log(longestWord);