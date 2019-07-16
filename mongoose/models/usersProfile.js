const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const userSchema = new Schema( {
    name : String,
    age: Number,
    activity : Number,
    height : Number,
    weight : Number,
    sex : Number,
    bmi : Number,
    bmr : Number,
    cal : Number,
    activity : Number,
    condition: String , 
    recomandetCal : Number,
    saveDate : String ,

} )

// const ColorSchema = new Schema( {
//     name: String,
//     hexCode: String,
//     rgb: RGBColor
// } )

 const usersProfile = mongoose.model( 'usersProfile', userSchema )

module.exports = usersProfile
