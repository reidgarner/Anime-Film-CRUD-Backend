const db = require('../database-connection')

module.exports = {
    readAllMovies(){
        return db('movies')
    }
}