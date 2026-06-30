function passwordMatch(password1, password2) {
  return password1 === password2;
}

const passwordInput = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm_pass");
const submitBtn = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", () => {
  if (!passwordMatch(passwordInput.value, passwordConfirm.value)) {
    alert("Passwords don't match");
  } else {
    window.location.href = "success.html";
  }
});
