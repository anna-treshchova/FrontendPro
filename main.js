"use strict";

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const sliderDots = document.querySelector(".slider-dots");

const slidesToShow = 2;
const gap = 5;
const slideWidth = slides[0].offsetWidth + gap;
let currentIndex = 0;
const maxIndex = slides.length - slidesToShow;
let dots = [];

nextBtn.addEventListener("click", () => {
    currentIndex += slidesToShow;
    if (currentIndex >= maxIndex) currentIndex = maxIndex;
    updateSlider()
})

prevBtn.addEventListener("click", () => {
    currentIndex -= slidesToShow;
    if (currentIndex < 0) currentIndex = 0;
    updateSlider()
})

function updateSlider() {
    const offset = slideWidth * currentIndex;
    track.style.transform = `translateX(-${offset}px)`;

    nextBtn.disabled = currentIndex >= maxIndex;
    prevBtn.disabled = currentIndex === 0;

    dots.forEach((dot, index) => {
        if (index === Math.ceil(currentIndex / slidesToShow)) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    })
}

function createDots() {
    const totalDots = Math.ceil(slides.length / slidesToShow);
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("button");
        dot.classList.add("slider-dot");

        sliderDots.appendChild(dot);
        dots.push(dot);

        dot.addEventListener("click", () => {
            currentIndex = i * slidesToShow;
            if (currentIndex >= maxIndex) currentIndex = maxIndex;
            updateSlider()
        })
    }
    if (currentIndex === 0) {
        dots[0].classList.add("active");
    }
}

createDots();
updateSlider();