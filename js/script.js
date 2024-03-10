document.addEventListener("DOMContentLoaded", function () { var carouselSwiper = new Swiper(".carousel", { pagination: { el: ".swiper-pagination", clickable: true, }, }); });

document.addEventListener("DOMContentLoaded", function () {
    const minibaner = new Swiper(".minibaner", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});