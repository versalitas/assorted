//camelcase a string with _ or/ and -

const toCamelCase = (str) => {
  //replaces any substr of separator and the following letter with the result of the callback(letter is extracted and capitalized)
  return str.replace(/(_|-)./g, letter => letter.substr(1, 1).toUpperCase());
}


//Mexican Wave
const wave = (str) => {
    
    let wave = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}


//change case
//compares ASCII values, lowercase values are greater than uppercase, g allows for matching all
String.prototype.toAlternatingCase = function () {
  return this.replace(/[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase()) 
}

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
const noSpace1 = (x) => 
{return x.split(' ').join('')}

//alt2
const noSpace2 = (x) => {
  return x.replace(/\s/g, '');
}

//eliminate at beginning and end
const noSpace3 = (x) => {
  return x.trim();
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
