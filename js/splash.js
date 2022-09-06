const logo = document.querySelector(".logo");
const bg = document.querySelector(".body");

function next() {
  setTimeout(() => {
    window.open("./pages/get-start.html", "_self");
  }, 2000);
}

setTimeout(() => {
  logo.setAttribute("class", "showLogo");
  bg.setAttribute("class", "bg");
  next();
}, 2000);
