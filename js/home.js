const visitant = localStorage.getItem("name");

const placeName = document.querySelector(".name");
placeName.innerHTML = visitant.toLowerCase();
