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

// galeria de imagenes para 1 producto
let productImg = document.getElementById("productImg")
let smallImg = document.getElementsByClassName("small-img")

smallImg[0].onclick = function(){
  productImg.src = smallImg[0].src
}
smallImg[1].onclick = function(){
  productImg.src = smallImg[1].src
}
smallImg[2].onclick = function(){
  productImg.src = smallImg[2].src
}
smallImg[3].onclick = function(){
  productImg.src = smallImg[3].src
}