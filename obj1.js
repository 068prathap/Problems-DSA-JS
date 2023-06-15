function sumSalaries(salaries) {

    let sum = 0;
    // for (let salary of Object.values(salaries)) {
    //   sum += salary;
    // }
    Object.values(salaries).forEach(element => sum += element);
    
    return sum; // 650
  }
  element => sum += element;
  element => {sum += element}
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) );