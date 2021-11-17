// Бургер меню
let menu = document.querySelector(".menu");
document.querySelector(".burger").onclick = () => {
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
};

$(function () {
  
  // Плавный скролл
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  // Слайдер
  $(".banners__slider").slick({
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
