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

document.addEventListener("DOMContentLoaded", function() {
    var articlesLink = document.getElementById("articles-link");
    var articlesSubmenu = document.getElementById("articles-submenu");

    if (articlesLink && articlesSubmenu) {
        articlesLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            if (articlesSubmenu.style.display === "none") {
                articlesSubmenu.style.display = "block";
            } else {
                articlesSubmenu.style.display = "none";
            }

            setTimeout(function() {
                window.location.href = articlesLink.getAttribute("href");
            }, 100); 
        });
    }
});