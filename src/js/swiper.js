import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width < 768) {
    const swiper = new Swiper(".benefits__slider", {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      loop: true,
      loopedSlides: 1,

      pagination: {
        el: ".pagination",
        clickable: true,
      },
    });
  }
});
