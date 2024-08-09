const form = document.getElementById("form");
const email = document.getElementById("email-box");
const error = document.getElementById("error");
const address = document.getElementById("address");
email.addEventListener("invalid", (e) => {
  e.preventDefault();
  email.style.background = "rgb(255,232,230)";
  email.style.borderColor = "hsl(4, 100%, 67%)";
  error.innerHTML = "Valid email required";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  localStorage.setItem('email', emailValue);
  window.location.href= ("success.html");
});
