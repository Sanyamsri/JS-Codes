let mobile = {
  brand: "Samsung",
  model: "Galaxy Note 9",
};

for (let key in mobile) {
  console.log(key + " " + mobile[key]);
}
/*> "brand Samsung"
> "model Galaxy Note 9" */

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 80, c: 30, d: 40 };
const obj3 = { e: 50 };
const obj = {};
Object.assign(obj, obj1, obj2, obj3);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj);
/*> Object { a: 10, b: 20 }
> Object { b: 80, c: 30, d: 40 }
> Object { e: 50 }
> Object { a: 10, b: 80, c: 30, d: 40, e: 50 } */
