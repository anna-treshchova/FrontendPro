import { BASE_URL, MOVIES_URL, REVIEWS_URL } from './config.js';

export async function getMovies() {
    const res = await fetch(`${BASE_URL}${MOVIES_URL}`)
    await errorHandler (res);
    return await res.json();
}

export async function addMovie(data) {
    const res = await fetch(`${BASE_URL}${MOVIES_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    await errorHandler(res);
    return await res.json();
}

export async function getMovie(id) {
    const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}`);
    await errorHandler(res);
    return await res.json();
}

export async function updateMovie(data, id) {
    const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    await errorHandler(res);
    return await res.json();
}

export async function deleteMovie(id) {
    const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}`, {
        method: 'DELETE',
    })
    await errorHandler(res);
}

export async function getReviews(id) {
    const  res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}${REVIEWS_URL}`)
    await errorHandler(res);
    return await res.json();
}

export async function addReview(id, data) {
    const  res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}${REVIEWS_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    await errorHandler(res);
    return await res.json();
}

async function errorHandler(res) {
    if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData.error || 'Unknown error';
        throw new Error(errorMessage);
    }
}

