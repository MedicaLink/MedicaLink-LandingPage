const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});


// mobile typewriter
window.addEventListener('load', function() {
  // Hide mobile version for larger screens
  if (window.innerWidth <= 768) {
    document.querySelector('.desktop-version').style.display = 'none';  // Hide desktop version
    document.querySelector('.mobile-version').style.display = 'block';  // Show mobile version
    setTimeout(function() {
      document.getElementById('get-started-btn-mobile').style.display = 'inline-block'; // Show the button
      AOS.init();  // Initialize AOS for mobile version
    }, 11000);
  } else {
    // Hide mobile version for larger screens
    document.querySelector('.desktop-version').style.display = 'block';  // Show desktop version
    document.querySelector('.mobile-version').style.display = 'none';  // Hide mobile version
    setTimeout(function() {
      document.getElementById('get-started-btn').style.display = 'inline-block'; // Show the button
      AOS.init();  // Initialize AOS for desktop version
    }, 6000);
  }
});