import { BASE_URL, GET_POSTS, GET_COMMENTS } from './config.js';

export async function getPosts() {
    const res = await fetch(`${BASE_URL}${GET_POSTS}`)

    if (!res.ok) {
        throw new Error(`Failed to get posts: ${res.statusText}`);
    }
    return res.json();
}

export async function addPost(title, body) {

   const res = await fetch(`${BASE_URL}`, {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           title,
           body
       })
   })

    if (!res.ok) {
        throw new Error(`Failed to add post!`);
    }

    return res.json();
}

export async function getComments(post, postId) {
    const res = await fetch(`${BASE_URL}/${postId}${GET_COMMENTS}`)

    if (!res.ok) {
        throw new Error(`Failed to get comments: ${res.statusText}`);
    }
    return res.json();
}

