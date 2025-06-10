const API_URL = "https://jsonplaceholder.typicode.com/posts"

const postForm = document.querySelector("#post-form");
const postInputTitle = document.querySelector("#post-input-title");
const postInputBody = document.querySelector("#post-input-body");
const postList = document.querySelector("#post-list");
const postStatus = document.querySelector("#post-status");

function getPosts() {
    fetch(`${API_URL}?_limit=10`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to get posts: ${res.statusText}`);
            }
            return res.json();
        })
        .then(posts => {
            posts.forEach((post) => {
                const li = createPost(post);
                postList.appendChild(li);
            })
        })
        .catch(err => {
            console.log(err.message);
        })
}

function createPost(post) {
    const li = document.createElement("li");
    li.dataset.id = post.id;

    li.classList.add("posts__item");

    li.innerHTML = `
      <h3 class="posts__item-title">${post.title}</h3>
      <p class="posts__item-body">${post.body}</p>
      <button class="load-btn">Load comments</button>  
      <button class="hide-btn hidden">Hide comments</button> 
      <div class="comments"></div>
    `
    return li;
}

function addPost(title, body) {
    fetch(`${API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            body
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to add post!`);
            }

            showStatus(true, "Post created successfully!")

            postInputTitle.value = "";
            postInputBody.value = "";
            postForm.querySelector("#add-btn").disabled = false;

            return res.json()
        })
        .then((post) => {
            const li = createPost(post);
            postList.appendChild(li);
        })
        .catch(err => {
            showStatus(false, err.message);
        });
}

function showStatus(status, message) {
    if (status) {
        postStatus.classList.add("success");
    } else {
        postStatus.classList.add("error");
    }

    postStatus.innerText = message;

    setTimeout(() => {
        postStatus.innerText = "";
        postStatus.classList.remove("success", "error");
    }, 3000)
}

function getComments (post, postId, eTarget) {
    fetch(`${API_URL}/${postId}/comments?_limit=2`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to get comments: ${res.statusText}`);
            }
            return res.json();
        })
        .then((comments) => {
            if (comments.length > 0) {
                eTarget.classList.add("hidden");

                const hideBtn = eTarget.parentElement.querySelector(".hide-btn");
                hideBtn.classList.remove("hidden");

                const div = post.querySelector(".comments");
                div.innerHTML = "";

                const ul = renderComments(comments)
                div.appendChild(ul);
            }

        })
        .catch(err => {
            console.log(err.message);
        })
}

function createComment(comment) {
    const li = document.createElement("li");
    li.classList.add("comments__item");

    li.innerHTML = `
       <span class="comments__item-name">${comment.name}</span>
       <a href="#" class="comments__item-email">${comment.email}</a>
       <p class="comments__item-text">${comment.body}</p>
    `
    return li;
}

function renderComments(comments) {
    const ul = document.createElement("ul");
    ul.classList.add("comments__list");

    comments.forEach((comment) => {
        const li = createComment(comment)
        ul.appendChild(li);
    })

    return ul;
}

postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.querySelector("#add-btn").disabled = true;

    const title = postInputTitle.value.trim();
    const body = postInputBody.value.trim();

    if (!title || !body) {
        e.target.querySelector("#add-btn").disabled = false;
        return;
    }

    addPost(title, body);
})

postList.addEventListener("click", (e) => {
    if (e.target.classList.contains("load-btn")) {
        const post = e.target.parentElement;
        const postId = e.target.parentElement.dataset.id;

        getComments(post, postId, e.target)
    }
})

postList.addEventListener("click", (e) => {
    if (e.target.classList.contains("hide-btn")) {
        e.target.classList.add("hidden");

       const comments = e.target.parentElement.querySelector(".comments");
       comments.innerHTML = "";

       const loadBtn = e.target.parentElement.querySelector(".load-btn");
       loadBtn.classList.remove("hidden");
    }
})

getPosts();