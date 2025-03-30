const title = document.querySelector('.title');
const crossedText = document.querySelector('.crossed-text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    title.classList.toggle('title_active');
    btn.classList.toggle('btn_active');
    crossedText.classList.toggle('crossed-text_active');
})