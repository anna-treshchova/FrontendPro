export function createPost(post) {
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

export function showStatus(status, message) {
    const postStatus = document.querySelector("#post-status");

    status ? postStatus.classList.add("success") : postStatus.classList.add("error");

    postStatus.innerText = message;

    setTimeout(() => {
        postStatus.innerText = "";
        postStatus.classList.remove("success", "error");
    }, 3000)
}

export function createComment(comment) {
    const li = document.createElement("li");
    li.classList.add("comments__item");

    li.innerHTML = `
       <span class="comments__item-name">${comment.name}</span>
       <a href="#" class="comments__item-email">${comment.email}</a>
       <p class="comments__item-text">${comment.body}</p>
    `
    return li;
}

export function renderComments(comments) {
    const ul = document.createElement("ul");
    ul.classList.add("comments__list");

    comments.forEach((comment) => {
        const li = createComment(comment)
        ul.appendChild(li);
    })

    return ul;
}

export function changeBtn(btn, btnStatus) {
    btn.classList.add('hidden');

    const showBtn = btn.parentElement.querySelector(`.${btnStatus}-btn`);
    showBtn.classList.remove('hidden');
}