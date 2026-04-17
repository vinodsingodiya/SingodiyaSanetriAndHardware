var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
function learnMore(tour) {

    alert("You selected " + tour);

}
const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");
const dotsContainer = document.getElementById("dots");

let index = 0;
const visibleCards = 3;

// Create dots
for (let i = 0; i < cards.length - visibleCards + 1; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });

    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots span");

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20;
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Buttons
document.querySelector(".next").addEventListener("click", () => {
    if (index < cards.length - visibleCards) {
        index++;
        updateCarousel();
    }
});

document.querySelector(".prev").addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});
const gallery = document.getElementById("gallery");

function scrollLeft() {
    gallery.scrollBy({
        left: -400,
        behavior: "smooth"
    });
}

function scrollRight() {
    gallery.scrollBy({
        left: 400,
        behavior: "smooth"
    });
}


