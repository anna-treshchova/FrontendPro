/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kb: () => (/* binding */ addMovie),
  kD: () => (/* binding */ addReview),
  mN: () => (/* binding */ deleteMovie),
  nd: () => (/* binding */ getMovie),
  EK: () => (/* binding */ getMovies),
  Gs: () => (/* binding */ getReviews),
  GW: () => (/* binding */ updateMovie)
});

;// ./src/js/config.js
const BASE_URL = 'http://localhost:3000';
const MOVIES_URL = `/movies`;
const REVIEWS_URL = `/reviews`;
;// ./src/js/api.js

async function getMovies() {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}`);
  await errorHandler(res);
  return await res.json();
}
async function addMovie(data) {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  await errorHandler(res);
  return await res.json();
}
async function getMovie(id) {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}`);
  await errorHandler(res);
  return await res.json();
}
async function updateMovie(data, id) {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  await errorHandler(res);
  return await res.json();
}
async function deleteMovie(id) {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}`, {
    method: 'DELETE'
  });
  await errorHandler(res);
}
async function getReviews(id) {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}${REVIEWS_URL}`);
  await errorHandler(res);
  return await res.json();
}
async function addReview(id, data) {
  const res = await fetch(`${BASE_URL}${MOVIES_URL}/${id}${REVIEWS_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
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

/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ handleMovieListSubmit),
/* harmony export */   T: () => (/* binding */ handleMovieListClick)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(353);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(840);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(795);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(945);




async function handleMovieListClick(e) {
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
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .animateReviewForm */ .co)(target);
  }
}
async function handleMovieListSubmit(e) {
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
  const li = target.closest('li');
  const movieId = li.dataset.id;
  try {
    const movie = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__/* .getMovie */ .nd)(movieId);
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
    await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__/* .deleteMovie */ .mN)(movieId);
    await (0,_app_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .T)();
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
}
async function handleShowReviewsClick(target) {
  const movieId = target.closest('li').dataset.id;
  try {
    const reviews = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__/* .getReviews */ .Gs)(movieId);
    const ul = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .renderReviews */ .qh)(reviews);
    target.closest('li').appendChild(ul);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .animateReviews */ .XL)(target, ul);
    setTimeout(() => (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .changeBtn */ .$e)(target), 0);
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
}
async function handleHideReviewsClick(target) {
  const ul = target.closest('li').querySelector('.reviews');
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .animateReviews */ .XL)(target, ul);
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .changeBtn */ .$e)(target);
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
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .animateReviewForm */ .co)(target);
}
async function handleUpdateMovieForm(form) {
  const movieId = form.parentElement.dataset.id;
  try {
    const data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .collectFormData */ .f)(form);
    await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__/* .updateMovie */ .GW)(data, movieId);
    await (0,_app_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .T)();
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
}
async function handleAddReviewForm(form) {
  const movieId = form.parentElement.dataset.id;
  try {
    const data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .collectFormData */ .f)(form);
    await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__/* .addReview */ .kD)(movieId, data);
    form.reset();
    await (0,_app_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .T)();
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
}

/***/ }),

/***/ 795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(840);


const movieList = document.querySelector('#movie-list');
async function init() {
  try {
    const movies = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__/* .getMovies */ .EK)();
    movieList.innerHTML = '';
    movies.forEach(movie => {
      const li = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__/* .createMovie */ .Pc)(movie);
      movieList.appendChild(li);
    });
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
}

/***/ }),

/***/ 840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $e: () => (/* binding */ changeBtn),
/* harmony export */   Pc: () => (/* binding */ createMovie),
/* harmony export */   XL: () => (/* binding */ animateReviews),
/* harmony export */   co: () => (/* binding */ animateReviewForm),
/* harmony export */   qh: () => (/* binding */ renderReviews)
/* harmony export */ });
function createMovie(movie) {
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
    `;
  return li;
}
function renderReviews(reviews) {
  const ul = document.createElement('ul');
  ul.classList.add('reviews');
  reviews.forEach(review => {
    const li = createReview(review);
    ul.appendChild(li);
  });
  return ul;
}
function animateReviews(btn, ul) {
  if (btn.classList.contains('show-reviews-btn')) {
    btn.parentElement.style.transform = 'translateX(0)';
    setTimeout(() => {
      ul.style.transform = 'translateX(0)';
    }, 50);
  } else {
    btn.parentElement.style.transform = 'translateX(calc(50% - 246px))';
    ul.style.transform = 'translateX(110%)';
    setTimeout(() => {
      ul.parentElement.removeChild(ul);
    }, 300);
  }
}
function changeBtn(target) {
  const showBtn = target.classList.contains('show-reviews-btn');
  const addReviewBtn = target.parentElement.querySelector('.add-review-btn');
  target.classList.remove(showBtn ? 'show-reviews-btn' : 'hide-reviews-btn');
  target.classList.add(showBtn ? 'hide-reviews-btn' : 'show-reviews-btn');
  target.innerText = showBtn ? 'Hide Reviews' : 'Show Reviews';
  if (addReviewBtn) addReviewBtn.disabled = showBtn;
}
function animateReviewForm(target) {
  const li = target.closest('li');
  const form = li.querySelector('.add-review-form');
  if (target.classList.contains('add-review-btn')) {
    target.parentElement.style.display = 'none';
    setTimeout(() => {
      form.style.transform = 'translateX(0)';
    }, 50);
  } else {
    form.style.transform = 'translateX(110%)';
    setTimeout(() => {
      li.querySelector('.btn-box').style.display = 'flex';
    }, 200);
    setTimeout(() => {
      li.removeChild(form);
    }, 300);
  }
}

/***/ }),

/***/ 856:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(795);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(353);
/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(703);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(945);





const movieForm = document.querySelector('#add-movie-form');
const movieList = document.querySelector('#movie-list');
movieList.addEventListener('click', _handlers_js__WEBPACK_IMPORTED_MODULE_1__/* .handleMovieListClick */ .T);
movieList.addEventListener('submit', _handlers_js__WEBPACK_IMPORTED_MODULE_1__/* .handleMovieListSubmit */ .H);
movieForm.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .collectFormData */ .f)(movieForm);
    await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__/* .addMovie */ .kb)(data);
    movieForm.reset();
    await (0,_app_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .T)();
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
});
await (0,_app_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .T)();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ collectFormData)
/* harmony export */ });
function collectFormData(form) {
  const formData = new FormData(form);
  formData.forEach(value => {
    if (!value.trim()) {
      throw new Error('Not full information given');
    }
  });
  return Object.fromEntries(formData.entries());
}

/*‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

Якщо ми надсилаємо FormData в тілі запиту, браузер автоматично додає заголовок: Content-Type: multipart/form-data
Але express.json() не вміє обробляти multipart-дані, тому req.body буде порожнім

                                 Є ДВА СПОСОБИ ВИРІШЕННЯ ПРОБЛЕМИ З FormData:

 1. Використати middleware, який дозволяє обробляти дані з FormData, наприклад: multer()

 2. Конвертувати FormData у звичайний об’єкт та надіслати його як JSON:  Object.fromEntries(formData.entries())

    2.1  formData.entries() — метод .entries() повертає ітератор пар [ключ, значення] з форми:
        [
         ['title', 'Inception'],
         ['year', '2010']
       ]

    2.2  Object.fromEntries() — цей метод приймає масив (або ітератор) пар ключ–значення і перетворює його на об'єкт:
         {
           title: 'Inception',
           year: '2010'
         }

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(856);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map