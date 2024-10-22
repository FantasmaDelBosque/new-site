const topPositions = ['10rem', '30rem', '18rem']; // Valores de top disponibles
let currentIndex = 0; // Controla el índice actual

// Aplica los valores de 'top' solo si el ancho de la ventana es mayor a 768px
function adjustTopPositions() {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.imgs_video').forEach((div) => {
            // Aplica el valor de 'top' de acuerdo con el índice actual
            div.style.top = topPositions[currentIndex];
            
            // Incrementa el índice para ir al siguiente valor
            currentIndex++;
            
            // Resetea el índice si llega al final del array
            if (currentIndex >= topPositions.length) {
                currentIndex = 0;
            }
            div.style.marginBottom = '5rem';  // Añade margen para evitar que los divs se encimen
        });
    } else {
        // Si es una pantalla pequeña, elimina las posiciones de 'top' y establece un margen
        document.querySelectorAll('.imgs_video').forEach((div) => {
            div.style.top = ''; // Elimina el estilo de 'top'
            div.style.marginBottom = '20px'; // Espacio entre elementos en pantallas pequeñas
        });
    }
}

// Llama a la función al cargar y al redimensionar la ventana
window.addEventListener('load', adjustTopPositions);
window.addEventListener('resize', adjustTopPositions);

// Efectos de aparición y movimiento
$(document).ready(function () {
    // Aplicar la clase 'visible' a la primera imagen/video al cargar la página
    $('.imgs_video').first().addClass('visible');

    // Detecta el scroll del usuario
    $(window).on('scroll', function () {
        $('.imgs_video').each(function () {
            var scrollTop = $(window).scrollTop(); // Posición del scroll
            var elementOffset = $(this).offset().top; // Posición del elemento desde la parte superior
            var windowHeight = $(window).height(); // Altura de la ventana
            var distance = elementOffset - scrollTop; // Distancia entre el elemento y el scroll
            var elementHeight = $(this).outerHeight(); // Altura del elemento

            // Verifica si el elemento está visible en la ventana (ya sea parte de él entrando o saliendo)
            if (distance < windowHeight - 100 && distance + elementHeight > 100) {
                // Si el elemento está visible en la ventana, agregar la clase 'visible'
                $(this).addClass('visible');
            } else {
                // Si el elemento ya no está visible, puedes quitar la clase si deseas
                $(this).removeClass('visible'); // Opcional: si quieres que desaparezcan al salir
            }
        });
    });
});
