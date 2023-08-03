const form = document.getElementById('myForm');
const password = form["user-pwd-1"];
const confirmPassword = form["user-pwd-2"];
const feedback = document.getElementById("confirmPassword-feedback");
let isPasswordMatch = false;

confirmPassword.addEventListener("input", () => {
    if(password.value != confirmPassword.value) {
        feedback.textContent = "Passwords do not match!";
        isPasswordMatch = false;
    } else {
      feedback.textContent = "";
      isPasswordMatch = true;
    }
});

form.onsubmit = function () {
  if (isPasswordMatch) {
    alert("Account Created Successfully!");
    return true;
  } 
    alert("Passwords do not match.");
    return false;
};

