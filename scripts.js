
$('.slick_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
        dots:true,
        speed:800,
    autoplaySpeed: 2000,
    prevArrow:false,
    nextArrow:false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
 
  $('.multiple-items').slick({
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
        dots:true,
        speed:800,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
  
  $('.slider5').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
        dots:true,
        speed:800,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });