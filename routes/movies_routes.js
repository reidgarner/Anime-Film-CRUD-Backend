const express = require('express')
const router = express.Router()
const queries = require('../queries/movies_queries')

router.get('/', (req, res) => {
    queries.readAllMovies().then(movies => res.status(200).send({ movies }))
})

module.exports = router