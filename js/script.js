const nav_menu = document.querySelectorAll(".header-menu a");
const link_pagina = window.location.href;
const btn_compra_bike = document.querySelector(".buy-container .btn");
console.log(btn_compra_bike);

nav_menu.forEach((e) => {
  const link_elemento = e.href;
  e.classList.remove("menu-ativo");
  if (link_pagina.includes(link_elemento)) {
    e.classList.add("menu-ativo");
  }
});
