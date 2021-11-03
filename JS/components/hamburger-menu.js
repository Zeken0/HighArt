let menu = document.querySelector(".menu");
function toggleClass() {
  menu.classList.toggle("togglecls");
}

if (menu.includes("togglecls")) {
  window.onclick = function () {
    menu.classList.remove("togglecls");
  };
}
