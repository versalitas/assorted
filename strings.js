
//from codewars function that joins two strings without duplicates

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

//reverse a string

const reverseStr =  => (str){
  return str.split('').reverse().join('');  
}


const reverseString = (str) => {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--)
    res += str[i];
  return res;
}

//parseInt takes a string and converts to integer (from mosh)

function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger('56';)


//another solution

function convertToInteger(str) {
  return +str;
}
convertToInteger('56';)

// functions for eliminating whitespace
//alt1
const noSpace = (x) => 
{return x.split(' ').join('')}

//alt2
const noSpace = (x) => {
  return x.replace(/\s/g, '');
}

//eliminating vowels
const disemvowel = (str) => {
  return str.replace(/[aeiou]/gi, '');
}

//eliminating vowels
const disemvowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
		return newStr;
	};
