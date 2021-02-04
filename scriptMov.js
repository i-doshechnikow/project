'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        this.count = +prompt('Сколько посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько посмотрели?', '');
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Крайний фильм', ''),
                b = prompt('Ваша оценка', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done!)');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectedPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("malovato");
        } else {
            console.log('norm');
        }

    },

    writeYourGenres: function () {

        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Топ жанров через запятую`);

            if (genres === '' || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером ${i+1} - ${item}`);
        });

    }
};

console.log(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectedPersonalLevel();
personalMovieDB.writeYourGenres();

const x = 9119;

function x2(num) {
    let a = num.toString().split('');
    let val;
    let answer = '';
    for (val of a) {
        answer = answer + val * val;
    }
    console.log(Number(answer))
}

x2(x);