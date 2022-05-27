// filter

const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter((value) => {
  return value > 3;
});
console.log(filteredArray);
// Array [4, 5]

// for each

array.forEach((value) => console.log(value));
// 1 2 3 4 5

// map

const doubledArray = array.map((value) => {
  return value * 2;
});
console.log(doubledArray);
//[2, 4, 6, 8, 10]

//reduce
const first = 0;
const sum = array.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, first);
console.log(sum);
// 15

//splice
const days = ["monday", "wednesday", "thursday", "saturday"];
days.splice(1, 0, "tuesday");
console.log(days);
//  Array ["monday", "tuesday", "wednesday", "thursday", "saturday"]

days.splice(3, 1, "friday");
console.log(days);
//> Array ["monday", "tuesday", "wednesday", "friday", "saturday"
