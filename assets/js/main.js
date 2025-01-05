const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});

window.addEventListener('load', function() {
  setTimeout(function() {
    // After 6 seconds, show and trigger fade-up
    document.getElementById('get-started-btn').style.display = 'inline-block';
    AOS.init(); // Re-initialize AOS
  }, 6000); // Adjust this value based on your animation's duration
});

