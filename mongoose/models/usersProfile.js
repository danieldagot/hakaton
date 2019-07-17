    
const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
 const userSchema = new Schema( {
 "height": Number,
"weight": Number,
"bmi": Number,
"bmr": Number,
"cal": Number,
"condition": String,
"recomandetCal": Number,
"name": String,
"saveDate": String
 } )





 const user = mongoose.model( 'usersProfile', userSchema )

  module.exports = user