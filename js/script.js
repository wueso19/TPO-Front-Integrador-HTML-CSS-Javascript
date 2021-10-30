// js para el menu desplegable
let MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// redireccionar al hacer click en un producto
function detail() {
  window.location.href = ("product-details.html")
}

// toggle form
const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")
const indicator = document.getElementById("indicator")

function register() {
  registerForm.style.transform = "translateX(0px)"
  loginForm.style.transform = "translateX(0px)"
  indicator.style.transform = "translateX(100px)"

}
function login() {
  registerForm.style.transform = "translateX(300px)"
  loginForm.style.transform = "translateX(300px)"
  indicator.style.transform = "translateX(0px)"

}