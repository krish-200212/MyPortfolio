let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let lastScrollTop = 0; // Variable to track the last scroll position

menuIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  if (navbar.style.display === "block") {
    navbar.style.display = "none"; // Hide the navbar
    menuIcon.classList.remove("bx-x"); // Adjust the icon (assuming you are using some icon library)
  } else {
    navbar.style.display = "block"; // Show the navbar
    menuIcon.classList.add("bx-x"); // Adjust the icon to indicate it's open
  }
});

// Hide navbar on scroll down
window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    navbar.style.display = "none"; // Hide navbar when scrolling down
    menuIcon.classList.remove("bx-x"); // Change icon back to default
  }
  lastScrollTop = scrollTop; // Update the last scroll position
};

// Hide navbar when clicking outside of it
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
    navbar.style.display = "none"; // Hide the navbar
    menuIcon.classList.remove("bx-x"); // Change icon back to default
  }
});

// Handle resizing of the window
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    // Adjust this value based on your design
    navbar.style.display = "block"; // Show navbar on larger screens
    menuIcon.classList.remove("bx-x"); // Reset the icon
  } else {
    navbar.style.display = "none"; // Hide navbar on smaller screens
  }
});
