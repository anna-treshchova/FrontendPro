const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());


/*
 ◦ express() — це виклик функції з бібліотеки Express. Вона створює новий серверний додаток — екземпляр Express-програми

     Серверний додаток — це програма, яка працює на сервері і приймає запити від клієнтів через мережу, обробляє їх та
     надсилає назад відповіді

 ◦ const app — змінна, яка зберігає цей додаток, через цю змінну ми можемо:

     • налаштовувати маршрути (роутінг)

     • підключати middleware

     • запускати сервер (app.listen(...))

     • обробляти помилки тощо
*/

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

/*
 app.listen(PORT, () => {}) запускає сервер, який слухає (прослуховує) мережевий порт PORT — тобто чекає на вхідні
 HTTP-запити, які приходять на порт 3000

 Після того, як сервер успішно запустився і почав слухати порт, викликається callback функція (другий аргумент), яка
 виконується один раз, коли сервер успішно стартує і почне слухати порт
*/

const movies = [
    {
        id: uuidv4(),
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        year: 1994
    },
    {
        id: uuidv4(),
        title: 'The Hateful Eight',
        director: 'Quentin Tarantino',
        year: 2015
    },
    {
        id: uuidv4(),
        title: 'Reservoir Dogs',
        director: 'Quentin Tarantino',
        year: 1992
    },
    {
        id: uuidv4(),
        title: 'Django',
        director: 'Quentin Tarantino',
        year: 2012
    }
]

const movieMap = {};
movies.forEach((movie) => {
    movieMap[movie.title] = movie.id;
})

/*
console.log(movieMap);

{
  'Pulp Fiction': '7b1a45b8-f3c4-4330-ac4c-b9750523e5b2',
  'Reservoir Dogs': 'e1dbda61-9465-4744-ae91-b69249d11228',
   Django: '8d54e4b5-2f6f-4e41-a867-5b3a6ec2a278',
  'The Hateful Eight': 'a4ec0e0d-b1e9-4144-8a11-875ffb4c3cf1'
}

console.log(movieMap['Pulp Fiction'])   // 3f8e355d-3c2e-4d48-a1de-4e8dc323f400
*/

const reviews = [

    {
        id: uuidv4(),
        movieId: movieMap['Pulp Fiction'],
        author: 'Henry',
        rating: 3.5,
        comment: 'Good idea, but lacked emotional depth'
    },
    {
        id: uuidv4(),
        movieId: movieMap['Pulp Fiction'],
        author: 'Lucas',
        rating: 5.0,
        comment: 'Absolutely loved it! A must-watch'
    },
    {
        id: uuidv4(),
        movieId: movieMap['The Hateful Eight'],
        author: 'Anna',
        rating: 5,
        comment: 'A masterpiece of cinema. Brilliant directing and acting'
    },

    {
        id: uuidv4(),
        movieId: movieMap['The Hateful Eight'],
        author: 'Tyler',
        rating: 5,
        comment: 'A great choice for family viewing — kids will love it!'
    },
    {
        id: uuidv4(),
        movieId: movieMap['Reservoir Dogs'],
        author: "Max",
        rating: 4.5,
        comment: 'Great film, though a bit slow in the middle.'
    },
    {
        id: uuidv4(),
        movieId: movieMap['Django'],
        author: 'James',
        rating: 4.5,
        comment: 'Truly unforgettable! But be warned — there is quite a bit of violence'
    }
]

app.get('/movies', (req, res) => {
    if (movies) {
        res.json(movies);
    } else {
        res.status(404).json({ error: 'Movies not found' })
    }
})

app.post('/movies', (req, res) => {
    const { title, director, year } = req.body; // деструктуризація об'єкта req.body  —→  створюємо три змінні: title, director, year

    if (!title) {
        return res.status(400).json({ error: 'Title is required' })
    }
    if (!director) {
        return res.status(400).json({ error: 'Director is required' })
    }
    if (!year) {
        return res.status(400).json({ error: 'Year is required' })
    }

    const movie = {
        id: uuidv4(),
        title,
        director,
        year
    }
    movies.push(movie);

    res.status(201).json(movie);
})


app.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;

    const movie = movies.find(movie => movie.id === movieId)

    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ error: 'Movie not found' })
    }
})

app.put('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const { title, director, year } = req.body;
    const movieIndex = movies.findIndex(movie => movie.id === movieId)

    if (movieIndex === -1) {
        res.status(404).json({ error: 'Movie not found' })
    }

    if (!title || !director || !year) {
        res.status(400).json({ error: 'Not full information given' })
    }
    movies[movieIndex] = {id: movieId, title, director, year}

    res.json(movies[movieIndex]);
});

app.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const movieIndex = movies.findIndex(movie => movie.id === movieId)

    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' })
    }
    movies.splice(movieIndex, 1);

    res.status(204).json();
});

app.get('/movies/:id/reviews', (req, res) => {
    const movieId = req.params.id;
    const movieReviews = reviews.filter(review => review.movieId === movieId);

    if (movieReviews.length === 0) {
        return res.status(404).json({ error: 'Reviews not found' })
    }

    res.json(movieReviews);
});

app.post('/movies/:id/reviews', (req, res) => {
    const movieId = req.params.id;
    const { author,  rating, comment } = req.body;

    if (!author) {
        return res.status(400).json({ error: 'Author is required' })
    }
    if (!rating) {
        return res.status(400).json({ error: 'Rating is required' })
    }
    if (!comment) {
        return res.status(400).json({ error: 'Comment is required' })
    }

    const newReview = {
        id: uuidv4(),
        movieId,
        author,
        rating,
        comment,
    }

    reviews.push(newReview);

    res.status(201).json(newReview);
})


