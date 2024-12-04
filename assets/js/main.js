const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});


function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent);
}

if (isMobile()) {
  // Perform actions for mobile devices
  document.body.classList.add('is-mobile');
} else {
  // Perform actions for non-mobile devices
  document.body.classList.add('is-desktop');
}
