//Code block contains jquery and js
$(document).ready(function () {
  $(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 100,
      disableOnInteraction: true,
    },
  });

  var swiper2 = new Swiper(".pop-pack-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      700: {
        slidesPerView: 2,
      },

      1100: {
        slidesPerView: 3,
      },
    },
  });

  var swiper3 = new Swiper(".testimonal-swiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },

      1100: {
        slidesPerView: 2,
      },
    },
  });
  var swiper4 = new Swiper(".gallery-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination-4",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-4",
      prevEl: ".swiper-button-prev-4",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    speed: 500,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        spaceBetween:0,
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 3,
      },

      1100: {
        slidesPerView: 4,
      },
    },
  });

  var swiper5 = new Swiper(".mySwiper-5", {
    slidesPerView: 1,
    spaceBetween:100 ,
    loop: true,
    pagination: {
      el: ".swiper-pagination-5",
    },
    navigation: {
      nextEl: ".swiper-button-next-5",
      prevEl: ".swiper-button-prev-5",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 3,
      },

      1100: {
        slidesPerView: 4,
      },
    },
  });

  var swiper6 = new Swiper(".mySwiper-6", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination-6",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    speed: 500,
  });

  //Modal for search button
  $(".search-btn").click(function () {
    $(".search-btn").addClass("toggle-active");
    if ($(".search-btn").hasClass("toggle-active")) {
      $(".my-modal").addClass("show");
    } else {
      $(".my-modal").removeClass("show");
    }
    $(".close-modal").click(function () {
      $(".my-modal").removeClass("show");
    });
  });

  //Animation on scroll for region section
  $(".animate-region-1").waypoint(
    function () {
      $(".animate-region-1").addClass("animate__animated animate__fadeInRight");
    },
    { offset: "70%" }
  );

  $(".animate-region-2").waypoint(
    function () {
      $(".animate-region-2").addClass("animate__animated animate__fadeInLeft");
    },
    { offset: "70%" }
  );

  $(".animate-region-3").waypoint(
    function () {
      $(".animate-region-3").addClass("animate__animated animate__fadeInRight");
    },
    { offset: "70%" }
  );

  $(".animate-region-4").waypoint(
    function () {
      $(".animate-region-4").addClass("animate__animated animate__fadeInLeft");
    },
    { offset: "70%" }
  );

  $(".animate-side-one").waypoint(
    function () {
      $(".animate-side-one").addClass("animate__animated animate__fadeInLeft");
    },
    { offset: "100%" }
  );

  //Discount Detail Show
  $("#btn-action-1").click(function () {
    $(".table").toggleClass("show");
  });

  //Iterinary Loop
  for (let i = 1; i <= 12; i++) {
    $(`#${i}`).click(function () {
      $(`#p-${i}`).toggleClass("show");
    });
  }
});

//adding animation to (to-top-btn class when it scroll reaches the bottom of the page)
window.addEventListener("scroll", function () {
  var button = document.querySelector(".to-top-btn");
  button.classList.toggle("rotate-in-center", window.scrollY > 4000);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("fixed", window.scrollY > 20);
});

const banner = document.querySelector(".banner");
const header = banner.querySelector(".text");

const phrases = ["Next Destination", "Adventure Path", "Next Tour"];
let currentPhraseIndex = 0;

const changeText = () => {
  header.textContent = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
};

setInterval(changeText, 5000);
textload();
