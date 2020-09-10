
const post2 = document.getElementById("post2");
const post2Img = document.getElementById("post2Img");
const loginId = document.getElementById("loginId");
const userID = document.getElementById("userID");
const logout = document.getElementById("logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
});

window.addEventListener("load", (e) => {
  e.preventDefault();
if (window.localStorage.getItem("user")){
  post2Img.style.display = "block";
  avatarID.style.display = "block";
  loginId.style.display = 'none';
  userID.style.display = 'block';
  logout.style.display = 'block';
  loginId.style.opacity = 0;
}else {
  logout.style.opacity = 0;
  userID.style.opacity = 0;
  post2Img.style.display = "none";
  post2Img.style.opacity = 0;
  avatarID.style.display = "none";
  loginId.style.display = 'block';
  userID.style.display = 'none';
  logout.style.display = 'none';
}});

loginId.addEventListener("click", (e) => {
  e.preventDefault();
  loginId.style.display = "block";
  window.location.href = "login.html";
});