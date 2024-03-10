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
            event.preventDefault(); // Evita que o link seja seguido

            // Alterna a exibição do submenu
            if (articlesSubmenu.style.display === "none") {
                articlesSubmenu.style.display = "block";
            } else {
                articlesSubmenu.style.display = "none";
            }

            // Redireciona para a página de artigos após um pequeno atraso
            setTimeout(function() {
                window.location.href = articlesLink.getAttribute("href");
            }, 200); // Ajuste o tempo conforme necessário
        });
    }
});