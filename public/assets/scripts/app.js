const menuIcon = document.getElementsByClassName("burger-icon")[0],
  navMobile = document.querySelector(".nav-mobile"),
  menuMobile = document.querySelectorAll(".menu-mobile-item"),
  menu = document.getElementsByClassName("overlay")[0],
  overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function () {
  navMobile.classList.add("opacity-0"),
    navMobile.classList.add("pointer-events-none"),
    menuIcon.classList.remove("burger-close"),
    overlay.classList.toggle("show");
}),
  menuIcon.addEventListener("click", function () {
    navMobile.classList.contains("opacity-0")
      ? (navMobile.classList.remove("opacity-0"),
        navMobile.classList.remove("pointer-events-none"),
        menuIcon.classList.add("burger-close"),
        overlay.classList.toggle("show"))
      : (navMobile.classList.add("opacity-0"),
        navMobile.classList.add("pointer-events-none"),
        menuIcon.classList.remove("burger-close"),
        overlay.classList.toggle("show"));
  }),
  [...menuMobile].map((e) =>
    e.addEventListener("click", function () {
      [...menuMobile].map((t) => {
        if (t !== e) return t.classList.remove("expand");
      }),
        e.classList.toggle("expand");
    }),
  ),
  document.addEventListener("scroll", function () {
    const e = document.querySelector("header"),
      t = document.querySelector("#backToTop");
    window.scrollY > 230
      ? (e.classList.add("sticky-header"),
        t.classList.remove("opacity-0"),
        t.classList.remove("invisible"))
      : (e.classList.remove("sticky-header"),
        t.classList.add("opacity-0"),
        t.classList.add("invisible"));
  });
const playButton = document.querySelectorAll(".play-video"),
  iframeVideo = document.querySelector(".video-iframe"),
  closeIframe = document.querySelector(".close-video"),
  video = document.querySelector(".video");
[...playButton].map((e) =>
  e.addEventListener("click", function (e) {
    const t = window.scrollY;
    iframeVideo.classList.remove("hidden"),
      (video.style.marginTop = `calc(${t}px + 25vh)`);
  }),
),
  closeIframe.addEventListener("click", () => {
    iframeVideo.classList.add("hidden");
  });
let tabList = document.querySelectorAll(".tab-item"),
  tabConentList = document.querySelectorAll(".tab-content");
[...tabList].map((e) =>
  e.addEventListener("click", function (t) {
    [...tabList].map((e) => e.classList.remove("active")),
      [...tabConentList].map((e) => e.classList.add("!hidden")),
      e.classList.add("active"),
      document.querySelector(`.${this.id}`).classList.remove("!hidden");
  }),
),
  $(document).ready(function () {
    $(".offer-list").slick({
      arrows: !1,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: !0,
      autoplay: !1,
      responsive: [
        { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
      $(".feedback-list").slick({
        arrows: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        autoplay: !1,
        prevArrow: ".feedback-prev",
        nextArrow: ".feedback-next",
        responsive: [
          {
            breakpoint: 1025,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".team-list").slick({
        arrows: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        autoplay: !1,
        prevArrow: ".team-prev",
        nextArrow: ".team-next",
      }),
      $(".product-list").slick({
        arrows: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        autoplay: !1,
        prevArrow: ".product-prev",
        nextArrow: ".product-next",
        appendDots: $(".product-paging"),
      }),
      $(".product-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".product-nav",
      }),
      $(".product-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".product-main",
        prevArrow: ".product-single-prev",
        nextArrow: ".product-single-next",
        centerMode: !0,
        focusOnSelect: !0,
        centerPadding: "10px",
      }),
      $(".blog-post").slick({
        arrows: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        autoplay: !1,
        prevArrow: ".blog-prev",
        nextArrow: ".blog-next",
        responsive: [{ breakpoint: 500, settings: { arrows: !1 } }],
      });
  });
class Accordion {
  constructor(e) {
    (this.el = e),
      (this.summary = e.querySelector("summary")),
      (this.content = e.querySelector(".content")),
      (this.animation = null),
      (this.isClosing = !1),
      (this.isExpanding = !1),
      this.summary.addEventListener("click", (e) => this.onClick(e));
  }
  onClick(e) {
    console.log("e: ", e),
      e.preventDefault(),
      (this.el.style.overflow = "hidden"),
      this.isClosing || !this.el.open
        ? this.open()
        : (this.isExpanding || this.el.open) && this.shrink();
  }
  shrink() {
    this.isClosing = !0;
    const e = `${this.el.offsetHeight}px`,
      t = `${this.summary.offsetHeight}px`;
    this.animation && this.animation.cancel(),
      (this.animation = this.el.animate(
        { height: [e, t] },
        { duration: 400, easing: "ease-out" },
      )),
      (this.animation.onfinish = () => this.onAnimationFinish(!1)),
      (this.animation.oncancel = () => (this.isClosing = !1));
  }
  open() {
    (this.el.style.height = `${this.el.offsetHeight}px`),
      (this.el.open = !0),
      window.requestAnimationFrame(() => this.expand());
  }
  expand() {
    this.isExpanding = !0;
    const e = `${this.el.offsetHeight}px`,
      t = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
    this.animation && this.animation.cancel(),
      (this.animation = this.el.animate(
        { height: [e, t] },
        { duration: 400, easing: "ease-out" },
      )),
      (this.animation.onfinish = () => this.onAnimationFinish(!0)),
      (this.animation.oncancel = () => (this.isExpanding = !1));
  }
  onAnimationFinish(e) {
    (this.el.open = e),
      (this.animation = null),
      (this.isClosing = !1),
      (this.isExpanding = !1),
      (this.el.style.height = this.el.style.overflow = "");
  }
}
document.querySelectorAll("details").forEach((e) => {
  new Accordion(e);
});
const billSwitch = document.querySelector("#billSwitch");
billSwitch &&
  billSwitch.addEventListener("change", (e) => {
    e.currentTarget.checked
      ? document.querySelector(".package").classList.add("annually")
      : document.querySelector(".package").classList.remove("annually");
  });
let packageList = document.querySelectorAll(".package-card");
[...packageList].map((e) =>
  e.addEventListener("click", function (t) {
    [...packageList].map((e) => e.classList.remove("active")),
      e.classList.add("active");
  }),
);
let scrollElement = document.querySelector(".follow-scroll");
function createObserver() {
  let e;
  (e = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "-180px 0px 0px 0px",
    threshold: 0,
  })),
    e.observe(scrollElement);
}
function handleIntersect(e, t) {
  const o = document.querySelector(".blog-content");
  e.forEach((e) => {
    window.addEventListener("scroll", () => {
      o.getBoundingClientRect().top >= 30
        ? (e.target.style.cssText = "position:absolute; top:0;")
        : o.getBoundingClientRect().bottom <= 170
          ? (e.target.style.cssText = "position:absolute; bottom:0; top:auto;")
          : (e.target.style.cssText = "position:fixed; top:120px;");
    });
  });
}
function increaseCount(e, t) {
  const o = document.querySelector(".qty-val");
  let n = parseInt(o.value, 10);
  (n = isNaN(n) ? 0 : n), n++, (o.value = n);
}
function decreaseCount(e, t) {
  const o = document.querySelector(".qty-val");
  let n = parseInt(o.value, 10);
  n > 1 && ((n = isNaN(n) ? 0 : n), n--, (o.value = n));
}
scrollElement &&
  window.addEventListener(
    "load",
    (e) => {
      document.getElementById("branding") &&
        document.getElementById("branding").click(),
        createObserver();
    },
    !1,
  );
let minDollars = 16,
  maxDollars = 173,
  minRange = document.querySelector("#lower"),
  maxRange = document.querySelector("#upper");
function numberWithSpaces(e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function updateDollars() {
  let e = ((maxDollars - minDollars) * minRange.value) / 100 + minDollars,
    t = ((maxDollars - minDollars) * maxRange.value) / 100 + minDollars;
  (document.querySelector("#price-range-from").textContent =
    `$${numberWithSpaces(Math.floor(e))}`),
    (document.querySelector("#price-range-to").textContent =
      `$${numberWithSpaces(Math.floor(t))}`);
  let o = (98 * e) / (maxDollars + 20),
    n = (100 * t) / (maxDollars + 10);
  document
    .querySelector("#upper")
    .setAttribute(
      "style",
      `background: linear-gradient(to right, #e4e7ec ${o}%, var(--green-900) ${o}% ${n}%, #e4e7ec ${n}%) no-repeat center; background-size: 100% 6px;`,
    );
}
maxRange &&
  maxRange.addEventListener("input", () => {
    let e = parseInt(minRange.value),
      t = parseInt(maxRange.value);
    t < e + 10 &&
      ((minRange.value = t - 10),
      e === parseInt(minRange.min) && (maxRange.value = 10)),
      updateDollars();
  }),
  minRange &&
    minRange.addEventListener("input", () => {
      let e = parseInt(minRange.value),
        t = parseInt(maxRange.value);
      e > t - 10 &&
        ((maxRange.value = e + 10),
        t === parseInt(maxRange.max) &&
          (minRange.value = parseInt(maxRange.max) - 10)),
        updateDollars();
    });
const btnTextMonthly = document.querySelector(".btn-text-monthly"),
  btnTextYearly = document.querySelector(".btn-text-yearly");
btnTextMonthly &&
  btnTextMonthly.addEventListener("click", () => {
    btnTextMonthly.classList.add("bg-green-900"),
      btnTextYearly.classList.remove("bg-green-900"),
      document.querySelector(".package").classList.remove("annually");
  }),
  btnTextYearly &&
    btnTextYearly.addEventListener("click", () => {
      btnTextYearly.classList.add("bg-green-900"),
        btnTextMonthly.classList.remove("bg-green-900"),
        document.querySelector(".package").classList.add("annually");
    });
const productTab = document.querySelectorAll(".product-tab"),
  productTabContent = document.querySelectorAll(".product-tag-content");
function openTabs(e) {
  const t = e.currentTarget,
    o = t.dataset.product;
  productTabContent.forEach(function (e) {
    e.classList.remove("active");
  }),
    productTab.forEach(function (e) {
      e.classList.remove("active");
    }),
    document.querySelector("#" + o).classList.add("active"),
    t.classList.add("active");
}
productTab.forEach(function (e) {
  e.addEventListener("click", openTabs);
});
const imageZoom = document.querySelectorAll(".image-zoom");
imageZoom.forEach((e) => {
  e.addEventListener("mousemove", (e) => {
    const t = e.currentTarget;
    e.offsetX && (offsetX = e.offsetX),
      e.offsetY && (offsetY = e.offsetY),
      (x = (offsetX / t.offsetWidth) * 100),
      (y = (offsetY / t.offsetHeight) * 100),
      (t.style.backgroundPosition = x + "% " + y + "%");
  });
});
let priceItemList = document.querySelectorAll(".block-price-item");
[...priceItemList].map((e) =>
  e.addEventListener("click", function (t) {
    [...priceItemList].map((e) => e.classList.remove("active")),
      e.classList.add("active");
  }),
);
//# sourceMappingURL=app.js.map
