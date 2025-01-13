/* ---------------------PART AAINII--------------------------------------------- */
/* ---------------------PART AAINII--------------------------------------------- */
/* ---------------------PART AAINII--------------------------------------------- */
/* ---------------------SAMBUNG BAWAH LINE NI----------------------------------- */

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

// Function to scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide the scroll-to-top button based on scroll position
window.onscroll = function () {
  const scrollBtn = document.querySelector(".scroll-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Function to reveal elements when they are in view
function revealElementsOnScroll() {
  const welcomeBanner = document.getElementById("welcomeBanner");
  const bannerTitle = document.getElementById("bannerTitle");
  const countdownTimer = document.querySelector(".countdown-timer");

  const elements = [welcomeBanner, bannerTitle, countdownTimer];

  elements.forEach((element) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    }
  });
}

// Add event listener for scroll to handle element reveal
window.addEventListener("scroll", revealElementsOnScroll);

// Call the function initially to check if elements are already in view
revealElementsOnScroll();

// Set the countdown date (48 hours from now)
const countdownDate = new Date().getTime() + 48 * 60 * 60 * 1000;

// Update the countdown every 1 second
const interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is over, display a message and stop the timer
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    alert("The offer has expired!");
  }
}, 1000);

// Add event listeners for hover effect on review cards
document.addEventListener("DOMContentLoaded", () => {
  const reviewCards = document.querySelectorAll(".review-card");
  reviewCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "#f0f8ff";
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "white";
    });
  });
});
