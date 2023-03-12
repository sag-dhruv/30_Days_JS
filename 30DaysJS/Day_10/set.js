const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setLang = new Set(languages);
// console.log(setLang);    

const finalLang = [];
for (const l of setLang) {
    const filteredLang = languages.filter(lang => lang === l);
    // console.log(filteredLang);
    finalLang.push({
        lang: l,
        count: filteredLang.length
    })
}

// console.log(finalLang);

// Union of set
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]


let A = new Set(a);
let B = new Set(b);


let C = a.filter(no => B.has(no))
// console.log(C);


// Map
// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]

// const mapCountries = new Map(countries)
// console.log(mapCountries.size);

// Map methods
// 1) size
// --> return length

// 2) set()
// --> add key value pair

// 3) get()
// --> get value from key

// 4) has()
// --> check element is present in map 



// mapCountries.set('Germany','Berlin')
// console.log(mapCountries);
// let norwayCapital = mapCountries.get('Norway')
// console.log(norwayCapital);

// for(const [country,capital] of mapCountries){
//     console.log(country,capital);
// }
const nos = []
for (let i = 1; i <= 10; i++) {
    nos.push(i)

}

const noSet = new Set(nos);
// console.log(noSet);

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const finalCountry = []

// for (const c of countries) {
//     finalCountry.push([c,c.length])
// }
// console.log(finalCountry);
// const mapCountries = new Map(finalCountry)
// console.log(mapCountries);

console.log(languages);