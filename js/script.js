// menu ativo

const nav_menu = document.querySelectorAll(".header-menu a");
const link_pagina = window.location.href;

nav_menu.forEach((e) => {
  const link_elemento = e.href;
  e.classList.remove("menu-ativo");
  if (link_pagina.includes(link_elemento)) {
    e.classList.add("menu-ativo");
  }
});

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// accordion

const accordion_btn = document.querySelectorAll(".question-container button");

function toggleAccordion(e) {
  const pergunta = e.target;
  const ariaControl = pergunta.getAttribute("aria-controls");
  const resposta = document.querySelector(`#${ariaControl}`);
  const isExpanded = pergunta.getAttribute("aria-expanded");

  pergunta.setAttribute("aria-expanded", String(isExpanded !== "true"));
  resposta.classList.toggle("accordion-ativo");
}

accordion_btn.forEach((btn) => {
  btn.addEventListener("click", toggleAccordion);
});

// galeria de imagem

const galeria = document.querySelectorAll(".bikes-galery-container img");

function primeiroNaFila(e) {
  if (matchMedia("(min-width: 800px)").matches)
    e.target.parentElement.prepend(e.target);
}

function scaleImage(e) {
  e.target.style.transform = "scale(1.025)";
}
function resetScale(e) {
  e.target.style.transform = "scale(1)";
}

galeria.forEach((img) => {
  img.style.transition = "transform 0.4s ease";
  img.addEventListener("click", primeiroNaFila);
  img.addEventListener("mouseover", scaleImage);
  img.addEventListener("mouseout", resetScale);
});
