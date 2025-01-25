<<<<<<< HEAD
let register = document.querySelector("button.register");
let login = document.querySelector("button.login");
let formSide = document.querySelector(".form-side");
let registerContent = document.querySelector(".register-content");
let loginContent = document.querySelector(".login-content");
let formLogin = document.querySelector(".form-content-login");
let formRegister = document.querySelector(".form-content-register");

register.addEventListener("click", () => {
  if (window.innerWidth > 750) {
    formSide.style.animation = "fullToRight 1.6s ease-in-out forwards";
    registerContent.style.animation = "slideToLeft 1s ease-in-out forwards";
    loginContent.style.animation =
      "bigSlideRightToLeft 1s ease-in-out 1s forwards";
    formLogin.style.animation = "slideToRight 1s ease-in-out forwards";
    formRegister.style.animation =
      "slideLeftToRight 1s ease-in-out 1.1s forwards";
  } else {
    formLogin.style.animation = "slideToLeft 1s ease-in-out forwards";
    formRegister.style.animation = "slideRightToLeft 1s ease-in-out forwards";
    loginContent.style.animation = "slideLeftToRight 1s ease-in-out forwards";
    registerContent.style.animation = "slideToRight 1s ease-in-out forwards";
  }
});

login.addEventListener("click", () => {
  if (window.innerWidth > 750) {
    formSide.style.animation = "fullToLeft 1.6s ease-in-out forwards";
    registerContent.style.animation =
      "bigSlideLeftToRight 1s ease-in-out 1s forwards";
    registerContent.style.opacity = 0;
    registerContent.style.pointerEvents = "none";
    loginContent.style.animation = "slideToRight 1s ease-in-out forwards";
    formLogin.style.animation = "slideRightToLeft 1s ease-in-out 1.1s forwards";
    formLogin.style.opacity = 0;
    formLogin.style.pointerEvents = "none";
    formRegister.style.animation = "slideToLeft 1s ease-in-out forwards";
  } else {
    formLogin.style.animation = "slideLeftToRight 1s ease-in-out forwards";
    formRegister.style.animation = "slideToRight 1s ease-in-out forwards";
    loginContent.style.animation = "slideToLeft 1s ease-in-out forwards";
    registerContent.style.animation =
      "slideRightToLeft 1s ease-in-out forwards";
  }
});
=======
const btnRegister = document.querySelector('.btn-register');
const btnLogin = document.querySelector('.btn-login');
const sideForm = document.querySelector('.side-form');
const formSignUp = document.querySelector('.form-content.register');
const formLogin = document.querySelector('.form-content.login');
const registerText = document.querySelector('.register-text');
const loginText = document.querySelector('.login-text');

btnRegister.addEventListener('click', () => {
  if (window.innerWidth <= 750) {
    formLogin.classList.add('active');
    formSignUp.classList.add('active');
    registerText.classList.add('active');
    loginText.classList.add('active');
  } else {
    sideForm.style.animation = "registerActive 1.4s ease-in-out forwards";
    registerText.style.animation = "registerSlideOut 1s ease-in-out forwards";
    loginText.style.animation = "registerSlideIn 1.5s ease-in-out forwards";
  }
  
})

btnLogin.addEventListener('click', () => {
  if (window.innerWidth <= 750) {
    formLogin.classList.remove('active');
    formSignUp.classList.remove('active');
    registerText.classList.remove('active');
    loginText.classList.remove('active');
  } else {
    sideForm.style.animation = "loginActive 1.4s ease-in-out forwards";
    loginText.style.animation = "loginSlideOut 1s ease-in-out forwards";
    registerText.style.animation = "loginSlideIn 1.5s ease-in-out forwards";
  }
  
})
>>>>>>> 005a3d2da2b92f22803bd7ce7066109a38d93590
