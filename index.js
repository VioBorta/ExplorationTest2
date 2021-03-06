const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");
const avatarID = document.getElementById("avatarID");
const landingPage = document.getElementById("landingPage");
const post1 = document.getElementById("post1");
const post2 = document.getElementById("post2");
const post3 = document.getElementById("post3");
const post4 = document.getElementById("post4");

window.addEventListener("load", (e) => {
  e.preventDefault();
  var cookieJs = document.cookie;

  if (cookieJs) {
    avatarID.style.display = "block";
    loginId.style.display = "none";
    userID.style.display = "block";
    loginId.style.opacity = 0;
    logout.style.display = "block";
  } else {
    logout.style.opacity = 0;
    userID.style.opacity = 0;
    avatarID.style.display = "none";
    loginId.style.display = "block";
    userID.style.display = "none";
    logout.style.display = "none";
  }
});

loginId.addEventListener("click", (e) => {
  e.preventDefault();
  loginId.style.display = "block";
  window.location.href = "login.html";
});

post1.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "post1.html";
});
post2.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "post2.html";
});
post3.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "post3.html";
});
post4.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "post4.html";
});
landingPage.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  var cookieJs = document.cookie;
  window.location.reload();
  document.cookie = cookieJs + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
});
