const post1 = document.getElementById("post1");
const post1Img = document.getElementById("post1Img");
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
  post1Img.style.display = "block";
  avatarID.style.display = "block";
  loginId.style.display = "none";
  userID.style.display = "block";
  loginId.style.opacity = 0;
  logout.style.display = "block";

}else {
  logout.style.opacity = 0;
  userID.style.opacity = 0;
  post1Img.style.display = "none";
  post1Img.style.opacity = 0;
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
    window.location.href = "post1.html";
})