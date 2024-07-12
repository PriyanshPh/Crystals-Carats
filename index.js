let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("activeData");
  //   console.log(ul);
  if (ul.className == "activeData") {
    document.getElementById("menu").className = "fa-solid fa-xmark"
  } else document.getElementById("menu").className = "fa-solid fa-bars"
});

// Popup Form:
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('popup').style.display = 'block';
  }, 1000);

  document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
  });

  // Toggle OTP input for email verification
  document.getElementById('verify-email').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    document.querySelector('.email-verify').style.display = 'none';
    document.querySelector('.otp-input:nth-of-type(1)').style.display = 'block';
  });

  // Toggle OTP input for contact number verification
  document.getElementById('verify-contact').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    document.querySelector('.contact-verify').style.display = 'none';
    document.querySelector('.otp-input:nth-of-type(2)').style.display = 'block';
  });
});

const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const signupContent = document.getElementById('signup-content');
const loginContent = document.getElementById('login-content');

signupLink.addEventListener('click', function (event) {
  event.preventDefault();
  signupContent.classList.add('active');
  loginContent.classList.remove('active');
  signupLink.classList.add('active');
  loginLink.classList.remove('active');
});

loginLink.addEventListener('click', function (event) {
  event.preventDefault();
  signupContent.classList.remove('active');
  loginContent.classList.add('active');
  signupLink.classList.remove('active');
  loginLink.classList.add('active');
});

// Necklace Popup
function showPopup() {
  document.getElementById('popupContainer').style.display = 'block';
}

function closePopup() {
  document.getElementById('popupContainer').style.display = 'none';
}