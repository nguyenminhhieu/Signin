document.getElementById("signin-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example hardcoded login credentials
  const validUsername = "user";
  const validPassword = "password";

  if (username === validUsername && password === validPassword) {
    document.getElementById("message").textContent = "Login successful!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Invalid username or password.";
  }
});
