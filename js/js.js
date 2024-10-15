$(document).ready(function(){
    sliderTam();
  
    // INICIA FUNCIÓN CONTROLADORA DE SLIDER
    var slider = $('#cont_slider');
    var atrasa = $('#controlL');
    var siguie = $('#controlR');
    
    $('.swiper_slider:last').insertBefore('.swiper_slider:first');
    
    function moverR() {
      let margin1 = $('.swiper_slider').width();
          margin2 = margin1 * 2;
          margin1 = '-' + margin1 + 'px';
          margin2 = '-' + margin2 + 'px';
      slider.animate({
        marginLeft: margin2,
      }, 400, function(){
        $('.swiper_slider:first').insertAfter('.swiper_slider:last');
        slider.css('margin-left', margin1);
      });
    }
    
    function moverL() {
      let margin1 = $('.swiper_slider').width();
          margin1 = '-' + margin1 + 'px';
      slider.animate({
        marginLeft: 0,
      }, 400, function(){
        $('.swiper_slider:last').insertBefore('.swiper_slider:first');
        slider.css('margin-left', margin1);
      });
    }
    
    atrasa.on('click', function(){
      moverL();
    });
    
    siguie.on('click', function(){
      moverR();
    });
    
    function sliderAutomatico(tiempo) {
      interval = setInterval(function(){
        moverR();
      }, tiempo);
    }
    
    sliderAutomatico(4000);
  
    // FUNCIONES DE AJUSTE DE TAMAÑO DEL SLIDER
    $(window).on('resize', function(){
      sliderTam();
    });
  
    function sliderTam() {
      var $anchoW = $(window).width();
      var $swipes = $('.swiper_slider').length;
      if ($anchoW >= 1367) {
        tamano($anchoW, 4, $swipes);
      } else if($anchoW < 1367 && $anchoW >= 994) {
        tamano($anchoW, 3, $swipes);
      } else if($anchoW < 994 && $anchoW >= 767) {
        tamano($anchoW, 2, $swipes);
      } else if ($anchoW < 767) {
        tamano($anchoW, 1, $swipes);
      }
      
      var mNegas = $('.img_slide').width();
      mNegas = '-' + mNegas+'px';
      $('.cont_slider').css('margin-left', mNegas);
    
      var $altoLi = $('.img_slide').height();
      $('.cont_slider').height($altoLi);
    }
    
    function tamano(anchoW,limite, swipes) {
      var tamano = anchoW / limite;
      var conten = tamano * swipes;
      $('.swiper_slider').width(tamano);
      $('.swiper_slider').height(tamano);
      $('.cont_slider').width(conten);
    }
  });

  // Segundo código (Menú y firma sticky)
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeMenu = document.getElementById('close-menu');
  const isaCz = document.getElementById('isacz');

  // Mostrar el menú cuando se hace clic en la mariposa/piernas
  menu.addEventListener('click', function() {
      menuOverlay.classList.add('active');
  });

  // Cerrar el menú cuando se hace clic en el botón de cerrar
  closeMenu.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
  });

  // Mover la firma hacia la izquierda al hacer scroll

});
  

  



let lastScrollY = window.scrollY; // Almacena la posición anterior del scroll
const menu = document.getElementById('tu-menu'); // Cambia 'tu-menu' por el ID de tu menú

window.addEventListener('scroll', function() {
    console.log(`Scroll Y: ${window.scrollY}`); // Muestra la posición de scroll actual

    if (window.scrollY > 100) { // Ajusta el valor según necesites
        if (window.scrollY > lastScrollY) {
            // El usuario está desplazándose hacia abajo
            menu.classList.add('sticky'); // Añade la clase para mostrar el menú
            console.log('Menú activado'); // Mensaje para verificar que se activó el menú
        } else {
            // El usuario está desplazándose hacia arriba
            menu.classList.remove('sticky'); // Remueve la clase para ocultar el menú
            console.log('Menú desactivado'); // Mensaje para verificar que se desactivó el menú
        }
    } else {
        menu.classList.remove('sticky'); // Remueve la clase si no se ha desplazado lo suficiente
        console.log('Menú fuera de rango'); // Mensaje para cuando no se ha desplazado lo suficiente
    }

    lastScrollY = window.scrollY; // Actualiza la posición anterior del scroll
});
