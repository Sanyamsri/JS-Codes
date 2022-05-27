var empdata = {
  name: "sanyam",
  age: 21,
  profiSle: "intern",
  address: {
    state: "Delhi",
    country: "India",
  },
};
var destobject = {};
for (prop in empdata) {
  destobject[prop] = empdata[prop];
}
console.dir(destobject);
empdata.address.state = "Noida";
console.log("source data changed");
console.log("Destination State Data: " + destobject.address.state);
/* "source data changed"
> "Destination State Data: Noida" */

var empdata = {
  name: "sanyam",
  age: 21,
  profiSle: "intern",
  address: {
    state: "Delhi",
    country: "India",
  },
};
var destobject = JSON.parse(JSON.stringify(empdata));
console.log(destobject);
empdata.address.state = "Noida";
console.log("source data changed");
console.log("Destination State Data: " + destobject.address.state);
/* "source data changed"
  > "Destination State Data: Delhi  " */

var empdata = {
  name: "sanyam",
  age: 21,
  profiSle: "intern",
  address: {
    state: "Delhi",
    country: "India",
  },
};
var destobject = Object.assign(empdata);
console.log(destobject);
empdata.address.state = "Noida";
console.log("source data changed");
console.log("Destination State Data: " + destobject.address.state);
/* "source data changed"
> "Destination State Data: Noida" */

// recursion

var destinationObject = {};

function deepCopy(srcobj, destobj) {
  for (key in srcobj) {
    if (typeof srcobj[key] != "object") {
      destobj[key] = srcobj[key];
    } else {
      destobj[key] = {};
      deepCopy(srcobj[key], destobj[key]);
    }
  }
}

deepCopy(empdata, destobject);
