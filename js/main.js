const showDialog = document.getElementById("show-dialog");
const loginDialog = document.querySelector(".logIn");
const overlay = document.querySelector(".overlay");
const hideDialog = document.getElementById("hide-dialog");
const hideSignUpDialog = document.getElementById("hide-signUpDialog");
const login = document.querySelector(".login a");
// console.log(login);

const createNewAccout = document.getElementById("create-new-account");
const signUpDialog = document.querySelector(".signUp");

showDialog.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.toggle("hide");
  //   if(!showDialog.classList.contains("hide") || ! signUpDialog.classList.contains("hide"))
  loginDialog.classList.toggle("hide");
});
hideDialog.addEventListener("click", function () {
  overlay.classList.add("hide");
  loginDialog.classList.add("hide");
});

//   ============= signUp ==============
hideSignUpDialog.addEventListener("click", function () {
  signUpDialog.classList.add("hide");
  overlay.classList.add("hide");
});
createNewAccout.addEventListener("click", function () {
  overlay.classList.remove("hide");
  loginDialog.classList.add("hide");
  signUpDialog.classList.remove("hide");
});
login.addEventListener("click", function (e) {
  e.preventDefault();
  signUpDialog.classList.add("hide");
  loginDialog.classList.remove("hide");
});

// console.log(categories);




//model Delet //
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}