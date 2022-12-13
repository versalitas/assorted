//instead of switch an object with the options

let lookUpObj = { 
  "first_thing": "something", 
  "second_thing": "something else", 
  "third_thing": "A thing-a-mee",
}

//compulsary brackets since result will be a string

const lookUp = (value) => {
  let result = lookUpObj[value];
  return result
}

console.log(lookUp("first_thing"));

//array instead of switch

const lookUp = (n) => {
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n];
}



