const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3004
const movies = require ('./routes/movies_routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/movies', movies)

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})

app.use((req, res, next) => {
    res.status(404).send("That movie sucked anyway.")
}) 

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Your bad taste in film broke the website.')
})