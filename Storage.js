// local storage
localStorage.setItem("value", "Hey");
document.getElementById("div1").innerHTML = localStorage.getItem("value");
localStorage.removeItem("value");

// session storage
sessionStorage.setItem("value", "Hey");
document.getElementById("div1").innerHTML = sessionStorage.getItem("value");
sessionStorage.removeItem("value");
