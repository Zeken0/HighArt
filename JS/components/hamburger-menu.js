let menu = document.querySelector(".menu");

function toggleClass() {
  menu.classList.toggle("togglecls");

  document.querySelector("main").onclick = function () {
    menu.classList.remove("togglecls");
  };
}
