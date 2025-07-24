const messages = document.querySelectorAll(".message-container p");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let autoSlide;

function showSlide(i) {
    messages.forEach(p => p.classList.remove("active"));
    messages[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % messages.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + messages.length) % messages.length;
    showSlide(index);
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 2000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Initial
showSlide(index);
startAutoSlide();

// Events
nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});
