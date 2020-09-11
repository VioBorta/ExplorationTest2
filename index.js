
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
landingPage.addEventListener("click", (e) => {
  e.preventDefault();
    window.location.href = "index.html";
})