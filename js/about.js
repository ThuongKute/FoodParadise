function autoRotateCarousel() {
  var carouselItems = document.querySelectorAll('.carousel-item');
  var currentIndex = 0;

  function nextSlide() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
  }

  var interval = setInterval(nextSlide, 3000);

  // Dừng tự động chuyển cảnh khi người dùng tương tác với carousel
  var carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', function() {
    clearInterval(interval);
  });

  carousel.addEventListener('mouseleave', function() {
    interval = setInterval(nextSlide, 3000);
  });
}

// Gọi hàm autoRotateCarousel khi tài liệu HTML được tải hoàn toàn
document.addEventListener('DOMContentLoaded', autoRotateCarousel);
const contactUsHeight = document.querySelector('.footer__contact-us').offsetHeight;
document.querySelector('.map iframe').style.height = contactUsHeight + 'px';