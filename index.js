let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let lastScrollTop = 0; // Variable to track the last scroll position

// Function to toggle the navbar
const toggleNavbar = () => {
  if (navbar.style.display === "block") {
    navbar.style.display = "none"; // Hide the navbar
    menuIcon.classList.remove("bx-x"); // Adjust the icon
  } else {
    navbar.style.display = "block"; // Show the navbar
    menuIcon.classList.add("bx-x"); // Adjust the icon
  }
};

// Click event for the menu icon
menuIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  toggleNavbar(); // Call the function to toggle the navbar
});

window.onscroll = () => {
  if (menuIcon && window.innerWidth < 1154) {
    navbar.style.display = "none"; // Hide the navbar
    menuIcon.classList.remove("bx-x"); // Change icon back to default
  }
};

// Hide navbar when clicking outside of it
document.addEventListener("click", (event) => {
  if (menuIcon && window.innerWidth < 1154) {
    navbar.style.display = "none"; // Hide the navbar
    menuIcon.classList.remove("bx-x"); // Change icon back to default
  }
});

// Handle resizing of the window
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.style.display = "block"; // Show navbar on larger screens
    menuIcon.classList.remove("bx-x"); // Reset the icon
  } else {
    navbar.style.display = "none"; // Hide navbar on smaller screens
  }
});
