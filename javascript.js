function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (fullName.length < 5) {
      alert("Name must be at least 5 characters long.");
      return false;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email address.");
      return false;
    }

    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return false;
    }

    if (password === "password" || password === fullName || password.length < 8) {
      alert("Password must be at least 8 characters long and should not be 'password' or the user's name.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    // Additional conditions can be added here for more validation

    // If all validation criteria are met, the form can be submitted
    return true;
  }