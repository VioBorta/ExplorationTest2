
const post4 = document.getElementById("post4");
const post4Img = document.getElementById("post4Img");
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
  post4Img.style.display = "block";
  avatarID.style.display = "block";
  loginId.style.display = 'none';
  userID.style.display = 'block';
  logout.style.display = 'block';
  loginId.style.opacity = 0;

}else {
  logout.style.opacity = 0;
  userID.style.opacity = 0;
  post4Img.style.display = "none";
  post4Img.style.opacity = 0;
  avatarID.style.display = "none";
  loginId.style.display = 'block';
  userID.style.display = 'none';
  logout.style.display = 'none';
}
 

});

loginId.addEventListener("click", (e) => {
  e.preventDefault();

  loginId.style.display = "block";
  
  window.location.href = "login.html";

});