import '../scss/styles.scss';

import { getPosts, addPost, getComments } from './api.js';
import { createPost, showStatus, renderComments, changeBtn } from './ui.js';

const postForm = document.querySelector('#post-form');
const postInputTitle = document.querySelector('#post-input-title');
const postInputBody = document.querySelector('#post-input-body');
const postList = document.querySelector('#post-list');

async function init() {
    try {
        const posts = await getPosts();

        posts.forEach((post) => {
            const li = createPost(post);
            postList.appendChild(li);
        })
    } catch (err) {
        console.log(err.message);
    }
}

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.target.querySelector('#add-btn').disabled = true;

    const title = postInputTitle.value.trim();
    const body = postInputBody.value.trim();

    if (!title || !body) {
        e.target.querySelector('#add-btn').disabled = false;
        return;
    }

    try {
        const post = await addPost(title, body);

        showStatus(true, 'Post created successfully!')

        const li = createPost(post);
        postList.appendChild(li);

        postInputTitle.value = '';
        postInputBody.value = '';

        postForm.querySelector('#add-btn').disabled = false;

    } catch (err) {
        showStatus(false, err.message);
    }
})

postList.addEventListener('click', async (e) => {
    const isLoad = e.target.classList.contains('load-btn');
    const isHide = e.target.classList.contains('hide-btn');

    if (!isLoad && !isHide) return;

    const post = e.target.parentElement;
    const postId = e.target.parentElement.dataset.id;
    const commentsDiv = post.querySelector('.comments');

    if (isLoad) {
        try {
            const comments = await getComments(post, postId)

            if (comments.length > 0) {
                changeBtn(e.target, 'hide')
                commentsDiv.innerHTML = '';

                const ul = renderComments(comments)
                commentsDiv.appendChild(ul);
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    if (isHide) {
        changeBtn(e.target, 'load')
        commentsDiv.innerHTML = '';

    }
})

init();
