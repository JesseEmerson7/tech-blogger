const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", () => {
  fetch("/signUp", {
    method: "post",
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
    headers: {
      "Content-Type": "application/JSON",
    },
  }).then((response) => {
    console.log(response);
    if (response.status == 200) {
      window.location.href = "/dashboard";
    }
  });
});