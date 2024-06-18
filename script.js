// script.js

let slideIndex = 0;
const slides = document.querySelectorAll('.slider-wrapper img');

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

function showSlide() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

showSlide();
