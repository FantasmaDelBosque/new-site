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
  const menu = document.querySelector('.item');
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
  

$(document).ready(function() {
  var headerHeight = $('.header').outerHeight(); // Obtiene la altura del header
  var nav = $('nav'); // Selecciona el elemento nav

  // Escucha el evento scroll
  $(window).on('scroll', function() {
      var scrollTop = $(window).scrollTop(); // Detecta la cantidad de scroll

      // Si el usuario ha hecho scroll más allá del header
      if (scrollTop > headerHeight) {
          nav.addClass('scrolled'); // Añade la clase para reducir y mover el menú
      } else {
          nav.removeClass('scrolled'); // Elimina la clase cuando el usuario vuelve al tope
      }
  });
});
