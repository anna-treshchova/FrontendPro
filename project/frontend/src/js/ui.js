export function createMovie(movie) {
    const li = document.createElement("li");
    li.classList.add('movies__item');
    li.dataset.id = movie.id;

    li.innerHTML = `
       <div class='movies__item-info'>
          <span>Title: <span>${movie.title}</span></span>
          <span>Director: <span>${movie.director}</span></span>
          <span>Year: <span>${movie.year}</span></span>
       </div>
       <div class='btn-box'>
          <button class="btn update-btn">Update</button>
          <button class="btn delete-btn">Delete</button>
          <button class="btn show-reviews-btn">Show Reviews</button>
          <button class="btn add-review-btn">Add Review</button>
       </div>  
    `;
    return li;
}

function createReview(review) {
    const li = document.createElement("li");
    li.classList.add('reviews__item');

    li.innerHTML = `
       <div class="reviews__item-icon">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="#222222" stroke-width="2.2" stroke-linecap="round"></path> <circle cx="12" cy="8" r="4" fill="#ffffff" fill-opacity="0.24" stroke="#222222" stroke-width="2.2" stroke-linecap="round"></circle> </g></svg>
       </div>
       <span class='reviews__item-author'>${review.author}</span>
       <span class='reviews__item-rating'>${review.rating}</span>
       <span class="reviews__item-comment">${review.comment}</span>
    `
    return li;
}

export function renderReviews(reviews) {
    const ul = document.createElement('ul');
    ul.classList.add('reviews');

    reviews.forEach((review) => {
        const li = createReview(review);
        ul.appendChild(li);
    })

    return ul;
}

export function animateReviews(btn, ul) {
    if (btn.classList.contains('show-reviews-btn')) {
        btn.parentElement.style.transform = 'translateX(0)';

        setTimeout(() => {
            ul.style.transform = 'translateX(0)';
        }, 50)

    } else {
        btn.parentElement.style.transform = 'translateX(calc(50% - 246px))';
        ul.style.transform = 'translateX(110%)';

        setTimeout(() => {
            ul.parentElement.removeChild(ul);
        }, 300)
    }
}

export function changeBtn(target) {
    const showBtn = target.classList.contains('show-reviews-btn');
    const addReviewBtn = target.parentElement.querySelector('.add-review-btn')

    target.classList.remove(showBtn ? 'show-reviews-btn' : 'hide-reviews-btn');
    target.classList.add(showBtn ? 'hide-reviews-btn' : 'show-reviews-btn');
    target.innerText = (showBtn ? 'Hide Reviews' : 'Show Reviews');

    if (addReviewBtn) addReviewBtn.disabled = showBtn;
}

export function animateReviewForm(target) {
    const li = target.closest('li')
    const form = li.querySelector('.add-review-form');

    if (target.classList.contains('add-review-btn')) {
        target.parentElement.style.display = 'none';

        setTimeout(() => {
            form.style.transform = 'translateX(0)';
        }, 50)
    } else {
        form.style.transform = 'translateX(110%)';

        setTimeout(() => {
            li.querySelector('.btn-box').style.display = 'flex';
        }, 200)

        setTimeout(() => {
            li.removeChild(form);
        }, 300)
    }
}
