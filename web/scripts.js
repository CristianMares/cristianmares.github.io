let slideIndex = 0;

// Función para mostrar las diapositivas
function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    
    // Verificar si n es mayor o igual a la cantidad de diapositivas
    if (n >= slides.length) { 
        slideIndex = 0; 
    }
    
    // Verificar si n es menor que 0
    if (n < 0) { 
        slideIndex = slides.length - 1; 
    }
    
    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostrar la diapositiva actual
    slides[slideIndex].style.display = "block";
}

// Función para avanzar o retroceder las diapositivas
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Mostrar la primera diapositiva al cargar la página
showSlides(slideIndex);

// Cambiar de diapositiva automáticamente cada 5 segundos
setInterval(function() {
    plusSlides(1);
}, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Abrir o cerrar el menú móvil al hacer clic en el icono de menú
    menuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Cerrar el menú móvil haciendo clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });

    // Función para manejar el clic en los enlaces del menú
    function handleMenuClick(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener el elemento al que se está desplazando
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calcular la posición final, teniendo en cuenta la altura del encabezado
        const headerHeight = document.querySelector('header').offsetHeight;
        const offsetPosition = targetElement.offsetTop - headerHeight;

        // Desplazarse suavemente a la posición final
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Ocultar el menú móvil si está abierto
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    }

    // Obtener todos los elementos de enlace del menú
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Agregar el manejador de eventos a cada enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', handleMenuClick);
    });

    // Obtener todos los elementos de enlace del menú móvil
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu ul li a');

    // Agregar el manejador de eventos a cada enlace del menú móvil
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', handleMenuClick);
    });

    // Código para personalizar el asunto del formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value;
        document.getElementById('subject').value = 'Nuevo mensaje de ' + name;
    });
});
