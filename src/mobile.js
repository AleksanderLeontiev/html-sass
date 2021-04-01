const burger = document.getElementById("trigger");
const profile = document.querySelector(".profile");
const body = document.body;
const slider = document.querySelector(".page-slider");
burger.addEventListener("click", (event) => {
  event.preventDefault();
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let divSidebar = document.createElement("div");
  divSidebar.classList.add("nav__link");
  divSidebar.addEventListener("click", closeSidebar);
  profile.appendChild(divSidebar);
  body.classList.add("show-sidebar");
  slider.style.display = "none";
}

function closeSidebar() {
  body.classList.remove("show-sidebar");
  document.querySelector(".nav__link").remove();
  slider.style.display = "block";
}
