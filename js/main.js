document.addEventListener("DOMContentLoaded", function () {
  let tabletSize = window.matchMedia('(max-width: 980px)');
  let mobileSize = window.matchMedia('(max-width: 768px)');


  //header burger, submenu..
  const burger = document.querySelector("#menuOpen")
  const menu = document.querySelector("#menu")
  const submenuLink = document.querySelector(".header__slink-link")
  const submenu = submenuLink.closest(".header__slink").querySelector(".header__submenu")

  burger.addEventListener("click", function (e) {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active")
      menu.classList.remove("active")
      submenu.classList.remove("active")
    }
    else {
      burger.classList.add("active")
      menu.classList.add("active")
    }
  })

  //header submenu
  if (tabletSize.matches) {
    submenuLink.addEventListener("click", function (e) {
      e.preventDefault();
      submenu.classList.add("active")
      burger.classList.add("active")
    })
  }
  // header lang
  const lang = document.querySelectorAll(".lang")
  lang.forEach(link =>
    link.addEventListener("click", function (e) {
      link.classList.toggle("active")
    })
  )
  //footer toggle
  const footerHeader = document.querySelectorAll(".footer__ToggleMenu")
  footerHeader.forEach(link =>
    link.addEventListener("click", function (e) {
      const activeFooterHeader = document.querySelector(".footer__ToggleMenu.active")
      const activeFooterMenu = document.querySelector(".footer__ToggledMenu.active")
      const footerMenu = link.closest(".footer__item").querySelector(".footer__ToggledMenu")
      if (e.target !== activeFooterHeader) {
        link.classList.add("active")
        activeFooterMenu?.classList.remove("active")
      }
      activeFooterHeader?.classList.remove("active")
      footerMenu.classList.toggle("active")
    })
  )

  // sort selects
  if (document.getElementById('citySort')) {
    NiceSelect.bind(document.getElementById('citySort'))
  }
  if (document.getElementById('riverSort')) {
    NiceSelect.bind(document.getElementById('riverSort'))
  }
  if (document.getElementById('companySort')) {
    NiceSelect.bind(document.getElementById('companySort'))
  }
  if (document.getElementById('priceSort')) {
    NiceSelect.bind(document.getElementById('priceSort'))
  }
  if (document.getElementById('citySort2')) {
    NiceSelect.bind(document.getElementById('citySort2'))
  }
  if (document.getElementById('riverSort2')) {
    NiceSelect.bind(document.getElementById('riverSort2'))
  }
  if (document.getElementById('companySort2')) {
    NiceSelect.bind(document.getElementById('companySort2'))
  }
  if (document.getElementById('priceSort2')) {
    NiceSelect.bind(document.getElementById('priceSort2'))
  }
  if (document.getElementById('reviewsSort')) {
    NiceSelect.bind(document.getElementById('reviewsSort'))
  }


  // sliders
  const bannerSlider = new Swiper('.banner__slider', {
    loop: false,
    pagination: {
      el: '.banner__pagination',
    },
  });

  const cruiseSlider = new Swiper('.cruise__slider', {
    effect: "fade",
    loop: false,
    pagination: {
      el: '.cruise__pagination',
    },
  });


  partnersSliderItem = document.querySelector(".partners__slider")
  cruisecardsSliderItem = document.querySelector(".cruisecards__slider")

  partnersSlider = new Swiper(partnersSliderItem, {
    slidesPerView: 1,
    pagination: {
      el: ".partners__pagination",
      clickable: true,
    },
  });
  cruisecardsSlider = new Swiper(cruisecardsSliderItem, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".cruisecards__pagination",
      clickable: true,
    },
  });

  // read more
  const readMore = document.querySelectorAll(".read__more")

  readMore.forEach(link =>
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const toggledTextWrap = link.closest("p").querySelector(".text-hidden")
      if (link.classList.contains("active")) {
        toggledTextWrap.classList.remove("active")
        link.innerHTML = "Читать далее"
        link.classList.toggle("active")
      }
      else {
        toggledTextWrap.classList.add("active")
        link.classList.toggle("active")
        link.innerHTML = "Скрыть текст"
      }
    })
  )

  // reviews reply hide/show form
  const reviewsReply = document.querySelectorAll(".reviews__reply")

  reviewsReply.forEach(link =>
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const toggledForm = link.closest(".reviews__item").querySelector(".reviews__item-form")
      toggledForm.classList.toggle("active")
      link.classList.toggle("link--underline")
    })
  )
  // stars rating
  const stars = document.querySelectorAll(".stars--hover .stars__view .stars__item")
  stars.forEach(star =>
    star.addEventListener("click", function (e) {
      e.preventDefault();
      const rate = star.getAttribute("data-rate")
      const starWrap = star.closest(".stars")
      starWrap.setAttribute("data-rate", rate)
    })
  )
  // fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    mainClass: "modal-gallery",

    on: {
      initCarousel: (fancybox) => {

      }
    },
  });
  // feedback toggle
  const feedbackToggle = document.querySelector(".feedback__pick-show")
  if (feedbackToggle) {
    feedbackToggle.addEventListener("click", function (e) {
      e.preventDefault();
      const feedbackList = document.querySelector(".feedback__pick-list")
      feedbackList.classList.toggle("active")
    })
  }
});
