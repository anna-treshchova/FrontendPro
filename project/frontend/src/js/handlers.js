import { addReview, deleteMovie, getMovie, getReviews, updateMovie } from './api.js';
import { animateReviewForm, animateReviews, changeBtn, renderReviews } from './ui.js';
import { init } from './app.js';
import { collectFormData } from './utils.js';

export async function handleMovieListClick(e) {
    const target = e.target;

    if (target.classList.contains('update-btn')) {
        await handleUpdateClick(target);
    }

    if (target.classList.contains('delete-btn')) {
        await handleDeleteClick(target);
    }

    if (target.classList.contains('show-reviews-btn')) {
        await handleShowReviewsClick(target);
    }

    if (target.classList.contains('hide-reviews-btn')) {
        await handleHideReviewsClick(target);
    }

    if (target.classList.contains('add-review-btn')) {
        await handleAddReviewClick(target);
    }

    if (target.classList.contains('cancel-btn')) {
        animateReviewForm(target);
    }
}

export async function handleMovieListSubmit(e) {
    e.preventDefault();

    const form = e.target;

    if (form.classList.contains('update-movie-form')) {
        await handleUpdateMovieForm(form);
    }

    if (form.classList.contains('add-review-form')) {
        await handleAddReviewForm(form);
    }
}

async function handleUpdateClick(target) {
    const li = target.closest('li')
    const movieId = li.dataset.id;

    try {
        const movie = await getMovie(movieId);

        li.innerHTML = `
              <form id='update-movie-form' class='popup-form update-movie-form'>
                 <label>
                     <input type='text' name='title' value='${movie.title}'>
                 </label>
                 <label>
                     <input type='text' name='director' value='${movie.director}'>
                 </label>
                 <label>
                     <input type='number' name='year' min='1888' max='2025' value='${movie.year}'>
                 </label>
                 <button type='submit' class='btn update-movie-btn'>Update Movie</button>
              </form>
           `;
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleDeleteClick(target) {
    const movieId = target.closest('li').dataset.id;

    try {
        await deleteMovie(movieId);
        await init()
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleShowReviewsClick(target) {
    const movieId = target.closest('li').dataset.id;

    try {
        const reviews = await getReviews(movieId);

        const ul = renderReviews(reviews);
        target.closest('li').appendChild(ul);

        animateReviews(target, ul);
        setTimeout(() => changeBtn(target), 0);
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleHideReviewsClick(target) {
    const ul = target.closest('li').querySelector('.reviews');

    animateReviews(target, ul);
    changeBtn(target);
}

async function handleAddReviewClick(target) {
    const li = target.closest('li');

    const form = document.createElement('form');
    form.classList.add('popup-form', 'add-review-form');
    form.id = 'add-review-form';

    li.appendChild(form);

    form.innerHTML = `
           <label>
               <input type='text' placeholder='Enter your name' name='author'>
           </label>
           <label>
               <input type='number' placeholder='Rate the movie' name='rating' min='1' max='5' step='0.5'>
           </label>
           <label>
               <input type='text' placeholder='Write your comment...' name='comment'>
           </label> 
           <div>
               <button class='btn' type='submit'>Add Review</button>   
               <button class='btn cancel-btn' type='button'>Cancel</button>  
           </div>    
        `;
    animateReviewForm(target);
}

async function handleUpdateMovieForm(form) {
    const movieId = form.parentElement.dataset.id;

    try {
        const data = collectFormData(form);
        await updateMovie(data,  movieId);
        await init()
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

async function handleAddReviewForm(form) {
    const movieId = form.parentElement.dataset.id;
    try {
        const data = collectFormData(form);
        await addReview(movieId, data);
        form.reset();
        await init();
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}