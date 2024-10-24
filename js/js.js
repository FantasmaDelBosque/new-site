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
    const firmaMariposa = document.querySelector('.mariposa');
    const firmaPiernas = document.querySelector('.piernas');
    const firmaStaticLogo = document.createElement('img');
    firmaStaticLogo.src = 'imgs/firmaIMG.png';  // Imagen pequeña
    firmaStaticLogo.alt = 'logo simple';
    firmaStaticLogo.classList.add('static-logo');  // Clase para aplicar estilos

    // Función para manejar el cambio de firma al hacer scroll en pantallas pequeñas
    function handleScrollChange() {
        if (window.innerWidth <= 768) {  // Solo en pantallas pequeñas
            firmaMariposa.style.display = 'none';
            firmaPiernas.style.display = 'none';
            if (!document.querySelector('.static-logo')) {
                document.querySelector('.firma').appendChild(firmaStaticLogo);
            }
        } else {
            firmaMariposa.style.display = 'block';
            firmaPiernas.style.display = 'block';
            if (document.querySelector('.static-logo')) {
                firmaStaticLogo.remove();  // Elimina la imagen pequeña si está visible
            }
        }
    }

    // Mostrar el menú cuando se hace clic en la firma
    menu.addEventListener('click', function() {
        menuOverlay.classList.add('active');
    });

    // Cerrar el menú cuando se hace clic en el botón de cerrar
    closeMenu.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
    });

    // Función para manejar el cambio de firma al hacer scroll
    $(document).ready(function() {
        var header = $('.header');
        var nav = $('nav');
        var scrollIndicator = $('.scroll-indicator');
        var isSecondaryPage = $('body').hasClass('secondary-page');
        var slider = $('#slider');
        var sliderOffset = slider.offset().top;

        if (isSecondaryPage) {
            nav.addClass('scrolled');
            scrollIndicator.hide();
        } else {
            $(window).on('scroll', function() {
                var scrollTop = $(window).scrollTop();

                // Si el usuario ha hecho scroll más allá del inicio del slider
                if (scrollTop >= (sliderOffset - nav.outerHeight())) {
                    nav.addClass('scrolled');
                    scrollIndicator.hide();

                    // Cambio de firma en pantallas pequeñas al hacer scroll
                    handleScrollChange();
                } else {
                    nav.removeClass('scrolled');
                    scrollIndicator.show();

                    // Restablecer la firma a su estado inicial si el scroll está en la parte superior
                    if (window.innerWidth <= 768) {
                        firmaMariposa.style.display = 'block';
                        firmaPiernas.style.display = 'block';
                        if (document.querySelector('.static-logo')) {
                            firmaStaticLogo.remove();  // Elimina la imagen pequeña
                        }
                    }
                }
            });
        }
    });

    // Ejecutar la función al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if ($(window).scrollTop() >= sliderOffset - nav.outerHeight()) {
            handleScrollChange();
        }
    });
});


