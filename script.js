function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return rect.bottom >= 0 && rect.top <= windowHeight;
}

function onScroll() {
  const sections = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-topo, .fade-in-botton');
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('fade-in');
      section.classList.remove('fade-out');
    } else {
      section.classList.remove('fade-in');
      section.classList.add('fade-out');
    }
  });
}

document.addEventListener('DOMContentLoaded', onScroll);
document.addEventListener('scroll', onScroll);


function carregar() {
  setTimeout(function() {
      var mostrarDiv = document.querySelector(".mostrar");
      var elementosEsconder = document.querySelectorAll(".esconder");

      mostrarDiv.style.display = "none";
      elementosEsconder.forEach(function(elemento) {
          elemento.style.display = "grid";
      });

      // Restaurar o comportamento de rolagem após o efeito
      document.body.style.overflow = "auto";
  }, 3750);
}

// Adicionar evento de carga à página
window.addEventListener("load", carregar);




