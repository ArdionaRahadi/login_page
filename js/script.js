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
