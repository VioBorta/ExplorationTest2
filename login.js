const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginId = document.getElementById("loginId");
const avatarID = document.getElementById("avatarID");
const userLogged = document.getElementById("userLogged");
const img = document.getElementById("img");
const userID = document.getElementById("userID");
const post1 = document.getElementById("post1");
const post2 = document.getElementById("post2");
const post3 = document.getElementById("post3");
const post4 = document.getElementById("post4");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "pass") {
    window.localStorage.setItem(
      "user",
      JSON.stringify(loginForm.username.value)
    );
    window.localStorage.setItem(
      "pass",
      JSON.stringify(loginForm.password.value)
    );
    loginId.style.display = "none";
    avatarID.style.display = "block";
    loginForm.style.display = "none";
    userLogged.style.display = "block";
    window.location.href = "index.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});



post1.addEventListener("click", (e) => {
  e.preventDefault();

    window.location.href = "post1.html";
})
post2.addEventListener("click", (e) => {
  e.preventDefault();

    window.location.href = "post2.html";
})
post3.addEventListener("click", (e) => {
  e.preventDefault();

    window.location.href = "post3.html";
})
post4.addEventListener("click", (e) => {
  e.preventDefault();

    window.location.href = "post4.html";
})