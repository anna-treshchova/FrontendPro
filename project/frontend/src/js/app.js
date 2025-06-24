import {getMovies} from './api.js';
import {createMovie} from './ui.js';

const movieList = document.querySelector('#movie-list');

export async function init() {
    try {
        const movies = await getMovies();
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const li = createMovie(movie);
            movieList.appendChild(li);
        })
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}