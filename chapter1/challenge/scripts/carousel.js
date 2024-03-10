document.addEventListener('DOMContentLoaded', function () {
    var carouselMain = document.getElementById('carousel-main');
    var carouselL = document.getElementById('carousel-l');
    var carouselR = document.getElementById('carousel-r');
  
    // Previous Button Click Event
    document.getElementById('carousel-btn-prev').addEventListener('click', function () {
      var bsCarouselMain = new bootstrap.Carousel(carouselMain);
      var bsCarouselL = new bootstrap.Carousel(carouselL);
      var bsCarouselR = new bootstrap.Carousel(carouselR);
  
      bsCarouselMain.prev();
      bsCarouselL.prev();
      bsCarouselR.prev();
    });
  
    // Next Button Click Event
    document.getElementById('carousel-btn-next').addEventListener('click', function () {
      var bsCarouselMain = new bootstrap.Carousel(carouselMain);
      var bsCarouselL = new bootstrap.Carousel(carouselL);
      var bsCarouselR = new bootstrap.Carousel(carouselR);
  
      bsCarouselMain.next();
      bsCarouselL.next();
      bsCarouselR.next();
    });
  });
  