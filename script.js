const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('Последний просмотренный фильм?',''),
b = prompt('Ваша оценка?', ''),
c = prompt('Последний просмотренный фильм?',''),
d = prompt('Ваша оценка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);