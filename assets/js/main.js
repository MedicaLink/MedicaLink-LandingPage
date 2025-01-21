const sideBarCloseButton = document.getElementById("close-btn");
const openMenuButton = document.getElementById("menu-btn");

openMenuButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.remove("hidden");
});

sideBarCloseButton.addEventListener("click", (e) => {
  document.getElementById("sidebar").classList.add("hidden");
});

module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust based on your project structure
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
    },
  },
  plugins: [],
};


const carousel = document.querySelector('#carouselExample');
  let startX, endX;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Get the starting X coordinate
  });

  carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Update the X coordinate as the user drags
  });

  carousel.addEventListener('touchend', () => {
    if (startX && endX) {
      const diff = startX - endX;

      // If the swipe is more than 50px, trigger slide transition
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left, go to the next slide
          $('#carouselExample').carousel('next');
        } else {
          // Swipe right, go to the previous slide
          $('#carouselExample').carousel('prev');
        }
      }
    }

    // Reset the variables
    startX = null;
    endX = null;
  });