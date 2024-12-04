const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});

// Function to update the custom --vh variable
function setVH() {
  // Get the viewport height
  let vh = window.innerHeight * 0.01;
  // Set the custom CSS variable
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set the initial value on page load
setVH();

// Update the value on resize (to account for URL bar changes)
window.addEventListener('resize', setVH);