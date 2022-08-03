// dark mode start
const mode = document.querySelector('.img-moon')
const body = document.querySelector('body')
const icon = document.querySelector('.mode-icon')
let image = 0

mode.addEventListener('click', function () {
  body.classList.toggle('dark')
  if (image == 0) {
    icon.setAttribute('src', '../images/sun-01.svg')
    image = 1
  } else {
    icon.setAttribute('src', 'images/moon.svg')
    image = 0
  }
})
// dark mode end

// mixitup
$(function () {
  $('.button button').click(function () {
    $('button').removeClass('active')
    $(this).addClass('active');
  })

  // navbar
  $("window").on(scroll, function () {
    if ($('window').scrollTop()) {
      $('#navbar').addClass('sticky');
    }
    else ('navBar').removeClass('sticky');
  })
  // mixtup plugin start
  var mixer = mixitup('.portfolio');
  // mixtup plugin end

  // vinobox plugin start
  new VenoBox({
    selector: '.venobox',
    autoplay: true,
    maxWidth: "75%",
    border: "3px",
    bgcolor: "red"
  });
  // vinobox plugin end

  // aos plugin start
  AOS.init({
    offset: 120,
    duration: 1000
  });
  // aos plugin end

  // slick plugin start
  $('.slider').slick({
    arrows: true,
    autoplay: true,
    dot: true,
    autoplaySpeed: 2000,
    prevArrow: '.arrow-left',
    nextArrow: '.arrow-right',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  });
  // slick plugin end  
})
