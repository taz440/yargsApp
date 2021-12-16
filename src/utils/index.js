const movieArr = []
//Trying to update a mavie database from 1 to 2
//#1
//title: 'Harry Potter',
//actor: 'Daniel Radcliffe',
//Genre: 'Fantasy Fiction'
//#2
//title: 'Screem',
//actor: 'Neve Campbell',
//director: 'Horror'
//*******************************************************/ 

class Movie {
    constructor(title, actor, director) {
        this.title = title;
        this.actor = actor;
        this.genre = genre;
    }

    add() {
        movieArr.push(this);
    }

}


module.exports = {
    Movie, 
    movieArr,
};


