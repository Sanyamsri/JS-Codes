var variable = 10;
(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();

function f() {
  var a = "a";
  if (1) {
    var a = "2";
    console.log(a);
  }
  console.log(a);
}
f();

function f() {
  let a = "a";
  if (1) {
    let a = "2";
    console.log(a);
  }
  console.log(a);
}
f();

function outer() {
  var name = "Tiger";
  inner();

  function inner() {
    console.log(name);
  }
  inner();
}

outer();
