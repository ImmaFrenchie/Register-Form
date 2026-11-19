const loginForm = document.getElementById("loginform");
const registerForm = document.getElementById("RegisterForm");
const message = document.getElementById("message");

function showRegister(event) {
  event?.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  message.style.color = "red";
  message.textContent = "";
  document.getElementById("registername").focus();
}

function showLogin(event) {
  event?.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  message.style.color = "red";
  message.textContent = "";
  document.getElementById("loginemail").focus();
}

function register() {
  const name = document.getElementById("registername").value.trim();
  const email = document.getElementById("registeremail").value.trim();
  const password = document.getElementById("registerpassword").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

  if (!name || !email || !password || !confirmPassword) {
    message.style.color = "red";
    message.textContent = "Please fill in every field.";
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match. Please try again.";
    return;
  }

  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("registeredPassword", password);
  document.getElementById("loginemail").value = "";
  document.getElementById("loginpassword").value = "";
  showLogin();
  message.style.color = "green";
  message.textContent =
    "Registration complete. Please log in with your new email and password.";
}

function login() {
  const email = document.getElementById("loginemail").value.trim();
  const password = document.getElementById("loginpassword").value;
  const registeredEmail = localStorage.getItem("registeredEmail");
  const registeredPassword = localStorage.getItem("registeredPassword");

  if (!email || !password) {
    message.style.color = "red";
    message.textContent = "Please enter both your email and password.";
    return;
  }

  if (email !== registeredEmail || password !== registeredPassword) {
    message.style.color = "red";
    message.textContent = "The email address or password is incorrect.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Login successful.";
}
