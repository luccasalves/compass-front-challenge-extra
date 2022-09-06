const buttonGetStart = document.querySelector("#btn-getstart");
const inputName = document.querySelector("#inputName");
const showname = document.querySelector("#btn-showname");

buttonGetStart.addEventListener("click", () => {
  if (!inputName.value) {
    alert("Field can not be empety!");
    return;
  }
  localStorage.setItem("name", inputName.value);

  window.open("/pages/home.html", "_self");
});
