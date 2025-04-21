jQuery(document).ready(function ($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});


// Toast element and content references
const toastElement = document.getElementById('dynamicToast');
const toastTitle = document.getElementById('toastTitle');
const toastTime = document.getElementById('toastTime');
const toastMessage = document.getElementById('toastMessage');

// Initialize the toast
const toastInstance = new bootstrap.Toast(toastElement, { delay: 2000 });

// Array of messages and titles to cycle through
const toastData = [
  { title: "Welcome", message: "Hello! This is your first toast." },
  { title: "Update", message: "Here's an important update for you." },
  { title: "Reminder", message: "Don't forget to check out our new features!" },
  { title: "Goodbye", message: "See you soon! Thanks for visiting." }
];

// Index to track the current toast
let currentIndex = 0;

// Function to show the toast with updated content
function showDynamicToast() {
  const data = toastData[currentIndex];
  toastTitle.textContent = data.title;
  toastMessage.textContent = data.message;
  toastTime.textContent = new Date().toLocaleTimeString(); // Update time
  toastInstance.show();

  // Update index for the next message
  currentIndex = (currentIndex + 1) % toastData.length;
}

// Show the toast every 3 seconds
setInterval(showDynamicToast, 3000);