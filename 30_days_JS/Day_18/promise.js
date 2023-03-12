// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }

//   const callback = (err,result) => {
//     if(err){
//       return console.log(err)
//     }
//     return console.log(result)

//   }

//   doSomething(callback)

// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 3) {
//             resolve(skills)
//         } else {
//             reject('Not enough skills')
//         }
//     }, 2000)

// })

// promise.then(result => {
//     console.log(result,'result');
// }).catch(error => console.log(error,'error'))

const uri = 'https://restcountries.com/v2/all'


// fetch(uri).then(response => response.json()).then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error);
// })

// Async function
const square = async function (n) {
    return n * n
}

const fetchData = async () => {
    try {
        const response = await fetch(uri)
        const jsonCountry = await response.json()
        return jsonCountry;
        // console.log(jsonCountry);
    }
    catch (error) {
        console.log(error);
    }
}
const popData = [];
fetchData().then(data => {
    const pData = [];
    for (const [k, v] of Object.entries(data)) {
        console.log(v.languages);
        // console.log(v['area']);
    }
    popData.push([pData])

})



// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// const catData = async () => {
//     try{
//         const response = await fetch(catsAPI)
//         const catJson = await response.json()
//         return catJson
//     }
//     catch(err){
//         console.log(err);

//     }
// }

// catData().then(data => {
//     for (const [k,v] of Object.entries(data)){
//         let avg = Math.round(parseInt(v.weight.metric.split('-')[0])/parseInt(v.weight.metric.split('-')[1]))
//         console.log(avg);
//         // console.log(parseInt(v.weight.metric.split('-')[0]));
//     }
// })