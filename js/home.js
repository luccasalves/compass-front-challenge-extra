const visitant = localStorage.getItem("name");
const btnFav1 = document.querySelector(".fav1");
const btnFav2 = document.querySelector(".fav2");
const btnFav3 = document.querySelector(".fav3");
const btnFav4 = document.querySelector(".fav4");

const placeName = document.querySelector(".name");
placeName.innerHTML = visitant.toLowerCase();

let fav1 = false;
let fav2 = false;
let fav3 = false;
let fav4 = false;

function changColor(fav) {
  switch (fav) {
    case 1:
      fav1 = !fav1;
      if (fav1) {
        btnFav1.style.background = "#ff4848";
        return;
      }
      btnFav1.style.background = "#d4d4d4";
      break;
    case 2:
      fav2 = !fav2;
      if (fav2) {
        btnFav2.style.background = "#ff4848";
        return;
      }
      btnFav2.style.background = "#d4d4d4";
      break;
    case 3:
      fav3 = !fav3;

      if (fav3) {
        btnFav3.style.background = "#ff4848";
        return;
      }
      btnFav3.style.background = "#d4d4d4";
      break;

    default:
      fav4 = !fav4;

      if (fav4) {
        btnFav4.style.background = "#ff4848";
        return;
      }
      btnFav4.style.background = "#d4d4d4";
      break;
  }
}

btnFav1.addEventListener("click", () => changColor(1));
btnFav2.addEventListener("click", () => changColor(2));
btnFav3.addEventListener("click", () => changColor(3));
btnFav4.addEventListener("click", () => changColor(4));
