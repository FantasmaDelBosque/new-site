fetch('tu-imagen.svg')
.then(response => response.text())
.then(svg => {
    document.getElementById('svg-container').innerHTML = svg;
    const textElement = document.querySelector('text'); // Asegúrate de que haya un elemento <text> en tu SVG
    textElement.setAttribute('fill', 'red'); // Cambia el color
});