const origNum = 8;
const origObj = { color: "blue" };

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = "red";
};

changeItUp(origNum, origObj);
console.log(origNum); //8
console.log(origObj.color); // red

const array = [1, 2, 3, 4, 5];
const changearray = (array) => {
  array.push(6);
};
changearray(array);
console.log(array);
//[1, 2, 3, 4, 5, 6]
