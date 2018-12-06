const db = require('../database-connection')

module.exports = {
    readAllMovies(){
        return db('movies').orderBy('id', 'asce')
    },
    readMovieById(id) {
        return db('movies').where('id', id).first()
    },
    createMovie(newMovie) {
        return db('movies').insert(newMovie).returning('*')
    }, 
    updateMovie(id, updatedInfo) {
        return db('movies').update(updatedInfo).where('id', id).returning('*')
    }, 
    deleteMovie(id) {
        return db('movies').where('id', id).del()
    }
}