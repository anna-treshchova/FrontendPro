const btn = document.querySelector('#enter-btn');
const link = document.querySelector('#follow-link');

btn.addEventListener('click', () => {
    let promptLink = prompt("Enter your link here").trim();
    if (!promptLink) {
        alert('Invalid URL');
        link.href = "#";
        return;
    }

    if (!promptLink.startsWith('https://') && !promptLink.startsWith('http://')) {
        promptLink = "https://" + promptLink;
    }

    link.href = promptLink;
    btn.classList.add('btn_disabled');
    link.classList.remove('btn_disabled');
})
