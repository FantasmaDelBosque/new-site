
const topPositions = ['10rem', '30rem', '15rem']; // Valores de top disponibles
let currentIndex = 0; // Controla el índice actual

document.querySelectorAll('.imgs_video').forEach((div, index) => {
    // Aplica el valor de 'top' de acuerdo con el índice actual y luego avanza al siguiente
    div.style.top = topPositions[currentIndex];
    
    // Incrementa el índice para ir al siguiente valor
    currentIndex++;
    
    // Resetea el índice si llega al final del array
    if (currentIndex >= topPositions.length) {
        currentIndex = 0;
    }

    div.style.marginBottom = '5rem';  // Añade margen para evitar que los divs se encimen
});
