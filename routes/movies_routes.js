const express = require('express')
const router = express.Router()
const queries = require('../queries/movies_queries')

router.get('/', (req, res) => {
    queries.readAllMovies().then(movies => res.status(200).send({ movies }))
})

router.get('/:id', (req, res) => {
    if(!parseInt(req.params.id))res.send('not valid integer')
    queries.readMovieById(req.params.id).then(movie => res.status(200).send({ movie }))
})

router.post('/', (req, res) => {
    queries.createMovie(req.body).then(newMovie => res.status(201).send(newMovie))
}) 

router.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then
    (updatedMovie => res.status(200).send(updatedMovie))
})

router.delete('/:id', (req, res) => {
    queries.deleteMovie(req.params.id).then(() => res.sendStatus(204))
})

module.exports = router