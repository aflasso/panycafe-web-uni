let indice = 0;
const slides = document.querySelectorAll(".slide");

function moverCarrusel(direccion) {
    slides[indice].classList.remove("active");
    indice = (indice + direccion + slides.length) % slides.length;
    slides[indice].classList.add("active");
}
