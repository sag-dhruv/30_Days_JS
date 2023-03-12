// console.log('%c30 Days Of JavaScript', 'color:green')

// console.warn('%c30 Days Of JavaScript', 'color:red')

// console.error('This is an error message')

// console.table(['Asabeneh', 'Brook', 'David', 'John'])

// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }
//   console.table(user)

  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
//   console.table(countries)
  
const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
//   console.table(users)

// console.time('Regular for loop')
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1])
// }
// console.timeEnd('Regular for loop')

// console.info('30 Days Of JavaScript challenge is trending on Github')
// console.assert(4 < 3, '4 is greater than 3') // no result

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// console.group("Names")
// console.log(names);
// console.groupEnd()


const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()
  console.clear()