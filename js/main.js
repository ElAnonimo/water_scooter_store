$(function() {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow: `
      <button class="banner-section__slider-btn banner-section__slider-btnprev">
        <img src="images/arrow-left.svg" alt="" />
      </button>
    `,
    nextArrow: `
      <button class="banner-section__slider-btn banner-section__slider-btnnext">
        <img src="images/arrow-right.svg" alt="" />
      </button>
    `,
    responsive: [{
      breakpoint: 969,
      settings: {
        arrows: false
      }
    }]
  });

  $(".tab").on("click", function(evt) {
    evt.preventDefault();

    // this === текущий .tab, по которому кликнули
    $($(this).siblings()).removeClass("tab--active");
    $($(this)
      .parents(`
        .search__tabs,
        .tabs,
        .tabs-wrapper,
        .products__tabs,
        .card__tab-box,
        .aside-filter__tabs
      `)
      .siblings()
      .find(".tabs-content")
    ).removeClass("tabs-content--active");

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  $(".product-item__fav").on("click", function(evt) {
    evt.preventDefault();
    $(this).toggleClass("product-item__fav--active");
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `
      <button class="product-slider__slider-btn product-slider__slider-btnprev">
        <img src="images/arrow-black-left.svg" alt="" />
      </button>
    `,
    nextArrow: `
      <button class="product-slider__slider-btn product-slider__slider-btnnext">
        <img src="images/arrow-black-right.svg" alt="" />
      </button>
    `,
    responsive: [{
      breakpoint: 1301,
      settings: {
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 1201,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 870,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 590,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }]
  });

  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function() {
    // $(this).siblings().removeClass("filter__item-drop--active");
    $(this).toggleClass("filter__item-drop--active");
    $(this).next(".aside-filter__content, .filter__extra-content").slideToggle(300);
    // $(".aside-filter__content").toggleClass("aside-filter__content--hidden");
  });

  $(".js-range-slider").ionRangeSlider({
    grid: false,
    type: "double",
    min: 100000,
    max: 500000,
    from: 150000,
    to: 450000
  });

  $(".catalogue__filter-button-grid").on("click", function() {
    $(this).addClass("catalogue__filter-button--active");
    $(".catalogue__filter-button-line").removeClass("catalogue__filter-button--active");
    $(".product-item__wrapper").removeClass("product-item__wrapper--list");
  });
  $(".catalogue__filter-button-line").on("click", function() {
    $(this).addClass("catalogue__filter-button--active");
    $(".catalogue__filter-button-grid").removeClass("catalogue__filter-button--active");
    $(".product-item__wrapper").addClass("product-item__wrapper--list");
  });

  $(".rate-yo").rateYo({
    ratedFill: "#1c62cd",
    normalFill: "#c4c4c4",
    spacing: "7px",
  });

  $(".menu__btn").on("click", function() {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
    $(".search__tabs.tabs-wrapper").css("overflow-x", "hidden");
  });

  $(".footer__top-title--drop").on("click", function() {
    $(this).next().slideToggle(300);
    $(this).parent(".footer__top-item--drop").toggleClass("footer__top-item--drop-active");
  });

  $(".aside__btn").on("click", function() {
    $(this).next().slideToggle(300);
  });
});
