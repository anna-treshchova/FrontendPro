const img = document.querySelector("#img");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 9) + 1;
    img.src = `./img/${random}.jpg`;
})


