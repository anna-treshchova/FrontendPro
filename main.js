const btnContainer = document.querySelector('#btn-container');

btnContainer.addEventListener('click', (e) => {
    console.log("Clicked", e.target.textContent);
})
