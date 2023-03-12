// function outerFunction() {
//   let count = 0;
//   function plusOne() {
//       count++
//       return count
//   }
//   function minusOne() {
//       count--
//       return count
//   }

//   return {
//       plusOne:plusOne(),
//       minusOne:minusOne()
//   }
// }

// const i = outerFunction()
// console.log(i);
const personAccount = (fname,lname,i,e) => {
    let firstname = fname
    let lastname =lname
    let income = 0;
    let expenses = 0;
    function totalIncome(){
      return expenses - income;
    }
  
    function totalExpense(){
      return expenses
    }
  
    function accountInfo(){
      return `${firstname} & ${lastname}`
    }
  
    function addIncome(){
      income+=i;
      return income;
    }
  
    function addExpense(){
      expenses+=e;
      return expenses;
    }
  
    function accountBalance(){
      return expenses - income;
    }
  
    return {
      'totalIncome' : totalIncome(),
      'totalExpense' : totalExpense(),
      'accountInfo' : accountInfo(),
      'addIncome' : addIncome(),
      'addExpense' : addExpense(),
    }
  }
  
  const j = personAccount('Dhruv','Patel',1000,500)
  var someObject = {
    income: "This", 
    desc: "works!"
  };
  // console.log(j.addIncome());
  // console.log(j.accountInfo);
  console.log(j.addIncome);
  
  
  console.log(j);