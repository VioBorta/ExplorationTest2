
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");
const avatarID = document.getElementById("avatarID");
const landingPage = document.getElementById("landingPage");

window.addEventListener("load", (e) => {
  e.preventDefault();
if (!window.localStorage.getItem("user")){
  loginId.style.display = "block";
  avatarID.style.display = "none";
  userLogged.style.display = "none";
  window.location.href = "index .html";
}else {
  loginId.style.display = "none";
  avatarID.style.display = "block";
  userLogged.style.display = "block";
  window.location.href = "index.html";
}
});

loginId.addEventListener("click", (e) => {
  e.preventDefault();
  loginId.style.display = "block";
  window.location.href = "login.html";
});

