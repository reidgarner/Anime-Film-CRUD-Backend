const db = require('../database-connection')

module.exports = {
    readAllMovies(){
        return db('movies')
    },
    readMovieById(id) {
        return db('movies').where('id', id).first()
    },
    createMovie(newMovie) {
        return db('movies').insert(newMovie).returning('*')
    }
}