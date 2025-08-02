document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    // Username validation: must be at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation: must match a proper email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Make feedbackDiv visible
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Success green
    } else {
      feedbackDiv.innerHTML = messages.join("
");
      feedbackDiv.style.color = "#dc3545"; // Error red
    }
  });
});
 