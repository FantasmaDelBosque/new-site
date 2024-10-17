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
});

  
// Mover la firma hacia la izquierda al hacer scroll
$(document).ready(function() {
  var header = $('.header'); // Selecciona el header
  var nav = $('nav'); // Selecciona el elemento nav
  var isSecondaryPage = $('body').hasClass('secondary-page'); // Verifica si es una página secundaria
  var slider = $('#slider'); // Selecciona el slider
  var sliderOffset = slider.offset().top;  // Obtiene la posición del slider

  // Si es una página secundaria, aplica la clase 'scrolled' directamente
  if (isSecondaryPage) {
      nav.addClass('scrolled');
  } else {
      // Escucha el evento scroll solo si no es una página secundaria
      $(window).on('scroll', function() {
          var scrollTop = $(window).scrollTop(); // Detecta la cantidad de scroll

          // Si el usuario ha hecho scroll más allá del inicio del slider (ajustado con un pequeño margen)
          if (scrollTop >= (sliderOffset - nav.outerHeight())) {  // Ajusta aquí si es necesario
              var headerHeight = header.outerHeight(); // Mide el header cuando el slider aparece
              console.log("Altura del header al inicio del slider: " + headerHeight + "px");

              nav.addClass('scrolled'); // Mueve el menú cuando comienza el slider
          } else {
              nav.removeClass('scrolled'); // Elimina la clase cuando el usuario está por encima del slider
          }
      });
  }
});





