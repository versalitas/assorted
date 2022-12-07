const months = ['May', 'March', 'June', 'April', 'July'];
const days = [1,2,31,28, 9];

//PROPERTIES

Array.prototype.length 
months.length;


//METHODS

//SORT strings alphabetical
months.sort();

//SORT ascending numerical
// get min value out of array 
days.sort((a, b) => {return a - b};
const min = days[0];           

//get min out of array
const min = (days) => Math.min(...days);
         

//SORT descending numerical
// get max value out of array 
days.sort((a, b) => {return b - a);
const max = days[0];                         

// get max value out of array                       
const max = (days) => Math.max(...days); 
                         

//get MAX num
Math.max.apply(days);

//get MIN num
Math.min.apply(days);

//instead of cumbersome logic with or || )

months.includes('May');

['water', 'electric', 'plant'].includes(input)



//iteration with forEach applying something to some elements according to logic
someArray.forEach(el => {if(some logic){console.log(el));

//returns filtered array
const newArray = someArray.filter(el => el.propiedad === 'input´);

// delete first occurence of smallest value
  const removeSmallest = (numbers) => {
  //returns a copy starting from 0
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}
                                  

