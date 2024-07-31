window.onscroll = () => {
  let d = window.scrollY / (document.body.offsetHeight - window.innerHeight),
    e = (Math.round(100 * d), 360 * d);
  document.querySelector(".bg").style.background =
    `conic-gradient(#0EA5EA ${e / 2}deg, #0BD1D1 ${e}deg , #ddd ${e}deg)`;
};
//# sourceMappingURL=circular-scroll.js.map
