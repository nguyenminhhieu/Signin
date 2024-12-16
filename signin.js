document.getElementById("signin-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example hardcoded login credentials
  const validUsername = "user";
  const validPassword = "password";

  if (username === validUsername && password === validPassword) {
    document.getElementById("message").textContent = "Login successful!";
    document.getElementById("message").style.color = "green";

    // Redirect to GCD page after successful login
    window.location.href = "gcd.html";
  } else {
    document.getElementById("message").textContent = "Invalid username or password.";
    document.getElementById("message").style.color = "red";
  }
});
