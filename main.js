'use strict';

const nextBtn =  document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const track = document.querySelector('.slider__track');
const dotsContainer = document.querySelector('.slider__dots');

const slidesData = [
    {
        img: '1.jpg',
        name: 'Rizky Adongan',
        date: '19 Jan 2022',
        department: 'Design'
    },
    {
        img: '2.jpg',
        name: 'Sara Johnson',
        date: '21 Feb 2022',
        department: 'Product'
    },
    {
        img: '3.jpg',
        name: 'Alex Chen',
        date: '10 Mar 2022',
        department: 'Marketing'
    },
    {
        img: '4.jpg',
        name: 'Maria Rodriguez',
        date: '5 Apr 2022',
        department: 'Development'
    },
    {
        img: '5.jpg',
        name: 'Kevin Lee',
        date: '19 May 2022',
        department: 'Technology'
    },
    {
        img: '6.jpg',
        name: 'Sophie Adams',
        date: '8 Jun 2022',
        department: 'Research'
    }
];

function createSlides(slidesData) {
    slidesData.forEach(slide => {
        const slideEl = document.createElement('div');
        slideEl.classList.add('slider__item');

        const img = document.createElement('img');
        img.src = `img/${slide.img}`;

        const content =  document.createElement('div');
        content.classList.add('slider__item-content');

        const text = document.createElement('div');
        text.classList.add('slider__item-text');

        const name = document.createElement('div');
        name.classList.add('slider__item-name');
        name.innerText = slide.name;

        const date = document.createElement('div');
        date.classList.add('slider__item-date');
        date.innerText = slide.date;

        const department = document.createElement('div');
        department.classList.add('slider__item-department');
        department.innerText = slide.department;

        text.appendChild(name);
        text.appendChild(date);
        content.appendChild(text);
        content.appendChild(department);

        slideEl.appendChild(img);
        slideEl.appendChild(content);

        track.appendChild(slideEl);
    })
}

createSlides(slidesData);

let slides = document.querySelectorAll('.slider__item');

const firstSlide = slides[0].cloneNode(true);
firstSlide.classList.add('clone-end');
const lastSlide = slides[slides.length - 1].cloneNode(true);
lastSlide.classList.add('clone-start');

track.appendChild(firstSlide);
track.insertBefore(lastSlide, slides[0]);

slides = Array.from(document.querySelectorAll('.slider__item'));

let currentIndex = 1;
const slideWidth = slides[0].offsetWidth;
let dots = [];

track.style.transform = `translate(-${slideWidth * currentIndex}px)`;
setTimeout(() => {
    track.style.transition = 'transform 0.4s ease';
}, 50);

let isMoving = false;

nextBtn.addEventListener('click', () => {
    if (isMoving) return;
    isMoving = true;
    currentIndex++;

    updateSlider()
})

prevBtn.addEventListener('click', () => {
    if (isMoving) return;
    isMoving = true;
    currentIndex--;

    updateSlider()
})

track.addEventListener('transitionend', () => {
    isMoving = false;

    if (slides[currentIndex].classList.contains('clone-end')) {
        track.style.transition = 'none';
        currentIndex = 1;

        track.style.transform = `translate(-${slideWidth * currentIndex}px)`;

        setTimeout(() => {
            track.style.transition = 'transform 0.4s ease';
        }, 50);
    }

    if (slides[currentIndex].classList.contains('clone-start')) {
        track.style.transition = 'none';
        currentIndex = slides.length - 2;

        track.style.transform = `translate(-${slideWidth * currentIndex}px)`;

        setTimeout(() => {
            track.style.transition = 'transform 0.4s ease';
        }, 50);
    }
})

function updateSlider() {
    track.style.transform = `translate(-${slideWidth * currentIndex}px)`;

    let dotIndex;
    if (currentIndex === 0) {
        dotIndex = dots.length - 1;
    } else if (currentIndex > dots.length) {
        dotIndex = 0;
    } else {
        dotIndex = currentIndex - 1;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === dotIndex);
    })
}

function createDots() {
    const totalDots = slides.length -2;

    for (let i = 1; i <= totalDots; i++) {
        const dot = document.createElement("button");
        dot.classList.add('dot');

        dotsContainer.appendChild(dot);
        dots.push(dot);

        if (i === 1) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            if (isMoving) return;
            isMoving = true;
            currentIndex = i;
            updateSlider();
        })
    }
}

createDots();
updateSlider();


/*--------------------------------------------------------------------------------------------------------------

Змінна isMoving використовується як прапорець, щоб запобігти багаторазовим клікам під час анімації слайдера

Що робить isMoving:
   1. Перед початком руху слайдера — ставимо isMoving = true
   2. Поки isMoving === true — нові кліки ігноруються
   3. Коли анімація закінчилась (transitionend) — ставимо isMoving = false, і дозволяємо нові кліки

isMoving блокує всі нові кліки, поки не завершилась попередня анімація. Тому currentIndex не може вирости
занадто сильно, бо він збільшується лише один раз за 0.4 секунди — тільки коли слайдер готовий до наступного
кроку.

----------------------------------------------------------------------------------------------------------------

if (isMoving) return
isMoving = true;
    ↓ ↓ ↓
Коли ми натискаємо на кнопку:

   • Спочатку перевіряється, чи не відбувається зараз анімація (if (isMoving)).
   • Якщо анімація йде, то код зупиняється (відбувається return, і нічого не змінюється)

   • Якщо анімація не йде (isMoving === false), тоді слайдер починає рухатися, і ми ставимо isMoving = true,
      щоб блокувати нові кліки.

Коли анімація закінчується (після події transitionend):

   • Ми скидаємо isMoving = false, що дозволяє клікам бути обробленими знову.

-------------------------------------------------------------------------------------------------------------*/