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
    `
  });

  $(".tab").on("click", function(evt) {
    evt.preventDefault();

    // this === текущий .tab, по которому кликнули
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find(".tabs-content")).removeClass("tabs-content--active");

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
    `
  });

  $(".filter-style").styler();

  $(".filter__item-drop").on("click", function() {
    // $(this).siblings().removeClass("filter__item-drop--active");
    $(this).toggleClass("filter__item-drop--active");
    $(this).next(".aside-filter__content").slideToggle(200);
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
});
