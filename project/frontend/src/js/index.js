import '../scss/styles.scss';

import { init } from './app.js'
import { addMovie } from './api.js';
import { handleMovieListClick, handleMovieListSubmit } from './handlers.js';
import { collectFormData } from './utils.js';

const movieForm = document.querySelector('#add-movie-form');
const movieList = document.querySelector('#movie-list');

movieList.addEventListener('click', handleMovieListClick);
movieList.addEventListener('submit', handleMovieListSubmit);

movieForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const data = collectFormData(movieForm);
        await addMovie(data);

        movieForm.reset()

        await init()
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
})

await init();





