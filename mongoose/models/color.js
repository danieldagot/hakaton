const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const user = new Schema( {
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
    saveDate : Date ,

} )

// const ColorSchema = new Schema( {
//     name: String,
//     hexCode: String,
//     rgb: RGBColor
// } )

// const Color = mongoose.model( 'color', ColorSchema )

//module.exports = Color
