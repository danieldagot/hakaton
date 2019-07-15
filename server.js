require('dotenv').config()

const express = require( 'express' )
const app = express()
const port = process.env.PORT
const path = require( 'path' )

const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )

const router = require('./routes/api')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

app.use( express.static( path.join( __dirname, 'public' ) ) )
app.use( '/', router )




mongoose.connect( 'mongodb://localhos/users', { useNewUrlParser: true } ).then( () => {

    app.listen( port, () => console.log( `Running server on port ${ port }` ) )
} )
