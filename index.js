// ===== NAVBAR TOGGLE FUNCTIONALITY =====

// Select burger menu icon and nav links container
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle class 'active' to show/hide nav links on small screens
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// ===== CONTACT FORM VALIDATION =====

// Select the contact form by its ID
const form = document.getElementById('contactForm');

// Listen for form submit event
form.addEventListener('submit', function (e) {
  // Get input values
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Basic validation: Check for empty fields
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('Please fill out all fields before submitting.');
    e.preventDefault(); // Prevent form submission
  } else if (!validateEmail(email.value)) {
    // Check if email is in valid format
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});

// Function to validate email format using regular expression
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
  return re.test(email.toLowerCase());
}


// ===== SMOOTH SCROLL TO SECTION =====

// Add event listener to all internal nav links
const scrollLinks = document.querySelectorAll('.nav-links a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Smoothly scroll to the target section
    targetElement.scrollIntoView({ behavior: 'smooth' });

    // Close the mobile nav if open
    navLinks.classList.remove('active');
  });
});


// ===== IMAGE SLIDER FUNCTIONALITY =====

// Select all images in the slider
const sliderImages = document.querySelectorAll('.slider img');
let current = 0; // index of current image

// Function to cycle through images every 5 seconds
function startSlider() {
  setInterval(() => {
    // Hide all images first
    sliderImages.forEach(img => img.style.display = 'none');

    // Show the next image in the list
    current = (current + 1) % sliderImages.length;
    sliderImages[current].style.display = 'block';
  }, 5000); // 5000ms = 5 seconds
}

// Start the slider once the page is fully loaded
window.addEventListener('load', () => {
  if (sliderImages.length > 0) {
    sliderImages[0].style.display = 'block'; // show the first image initially
    startSlider();
  }
});
