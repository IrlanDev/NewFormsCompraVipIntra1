const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const forms = document.getElementById("section-forms");

btnLogin.addEventListener("click", () => {
  formLogin.style.display = "flex";
  formRegister.style.display = "none";
  btnLogin.classList.add("btn-active");
  btnLogin.classList.remove("btn-inactive");
  btnRegister.classList.add("btn-inactive");
  btnRegister.classList.remove("btn-active");
  forms.classList.add("margin-login");
});

btnRegister.addEventListener("click", () => {
  formLogin.style.display = "none";
  formRegister.style.display = "flex";
  btnRegister.classList.add("btn-active");
  btnRegister.classList.remove("btn-inactive");
  btnLogin.classList.add("btn-inactive");
  btnLogin.classList.remove("btn-active");
  forms.classList.remove("margin-login");
});

// Alternar visibilidade de senha
const togglePasswordVisibility = (inputId, iconElement) => {
  const input = document.getElementById(inputId);
  const isPassword = input.type === "password";

  // Alterna entre 'text' e 'password'
  input.type = isPassword ? "text" : "password";

  // Alterna o ícone entre olho aberto e fechado
  iconElement.src = isPassword 
    ? "assets/images/eye-off.svg" 
    : "assets/images/eye-on.svg"; 
};

// Adicionar eventos aos ícones de olho
document.querySelectorAll(".input-icon-eye").forEach((icon) => {
  icon.addEventListener("click", () => {
    const inputId = icon.previousElementSibling.id; // Localiza o input associado
    togglePasswordVisibility(inputId, icon);
  });
});
