const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});