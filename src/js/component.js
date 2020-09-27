$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });

  $('.products-more').click(function () {
    $('#productsmore').html($(this).parents('.products-item').find('.productsmore-item_hidden').html())
  })


  var count = 0;
  var count_item_r = $('.hide_products').length;
  $('.show_more').click(function (e) {
    event.preventDefault();
    count = count + 4;



    if (count_item_r < count) {
      $(this).hide(200);
    }

    $('.hide_products').each(function (index) {
      $(this).show(200);

      if (index == 0) {
        $(this).addClass('scrollTOP');
      }
      $(this).removeClass('hide_products');
      if (count == (index + 1)) {
        return false;
      }
    })


    var id = $('.scrollTOP'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

    $('.scrollTOP').removeClass('scrollTOP');
  });
  $('.reviews-slider').slick({
    lazyLoad: 'ondemand',
    dots: false,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<svg class="prev" width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="61.3523" y2="-1" transform="matrix(-1 0 0 1 63.353 20.4058)" stroke="#E6E6E6" stroke-width="2"/><line y1="-1" x2="26.4094" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.6787 2)" stroke="#E6E6E6" stroke-width="2"/><line x1="20.8705" y1="38.4024" x2="2.19624" y2="19.7281" stroke="#E6E6E6" stroke-width="2"/></svg>',
    nextArrow: '<svg class="next" width="64" height="39" viewBox="0 0 64 39" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="19.4058" x2="61.3523" y2="19.4058" stroke="#E6E6E6" stroke-width="2"/><line x1="44.2808" y1="1.29289" x2="62.9551" y2="19.9672" stroke="#E6E6E6" stroke-width="2"/><line y1="-1" x2="26.4094" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.5737 36.7964)" stroke="#E6E6E6" stroke-width="2"/></svg>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
    },
      {
        breakpoint: 600,
        settings: {
          dots: true,

          slidesToShow: 2,
          slidesToScroll: 1
        }
    },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
  ]
  });

  $('.reviews-slider ').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var elm = nextSlide + 1;
    if (elm < 10) elm = '0' + elm;
    $('#curent').text(elm);
    $('#all').text('0' + slick.slideCount);


  });



  $('form input').focusin(function () {
    $(this).parents('.label').css({
      'border-color': '#004FC6',
    })
    $(this).parents('.label').find('span').css({
      'color': '#004FC6',
      'font-size': '14px',
    })
  })

  $('form input').focusout(function () {
    $(this).parents('.label').css({
      'border-color': '#000',
    })
    $(this).parents('.label').find('span').css({
      'color': '#000',
      'font-size': '18px',
    })
  })

  $('.order-btn, .call-btn').click(function () {
    $('input[name="order_type"]').val($(this).data('title'));
    $('#order_form .title').text($(this).data('title'));

    if ($(this).hasClass('pr-btn')) {
      $('#order_form .order-btn').text('Замовити');
    } else {
      $('#order_form .order-btn').text('Відправити');
    }
  })


  /* form valid*/
  var alertImage = '<svg style="width: 20px; position:absolute;top: 10px;right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);
  $('input[name="page_url"]').val(window.location);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
    $('input[name="country"]').val(response.country);
    $('input[name="region"]').val(response.region);
  }, "jsonp");

  $('input[name="phone"]').inputmask("+38(099) 99 999 99");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);




  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);



/*    $.ajax({
      type: 'POST',
      url: 'mail.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });*/


    setTimeout(function () {
      window.location.href = "success.html";
    }, 1000);

  });



  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);
  });

  $('.menu').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })

  if ($(window).width() < 1200) {
    $('.remowe_el').remove();

    $('.mob-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      customPaging: function (slick, index) {
        return '<a>0' + (index + 1) + '</a>';
      }
    })

    $('.menu li a').click(function () {
      $('.menu').hide('200')
    })




  }
  
      var observer = lozad();
  observer.observe();
  
});