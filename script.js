$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 12,
  lazyLoad: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
