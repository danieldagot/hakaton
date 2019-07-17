const express = require('express')
const router = express.Router()
const logic = require("../logic/logic.js")
const user = require("../mongoose/models/user")
const usersProfile = require("../mongoose/models/usersProfile")
const moment = require("moment")
//let api = new ColorsApi()
const request = require("request")
const rp = require("request-promise")
router.get('/logic', (req, res) => {
    let data = req.body

    console.log(data);
    let l = new logic(data.height, data.weight, data.age, data.sex, data.activity)
    res.send(l)
})


router.get('/getProfile/:name', async (req, res) => {

    const name = req.params.name
    usersProfile.findOne({ name: name }, { _id: 0 }).exec(function (err, data) {
        res.send(data)
    })




})



router.post('/setProfile/:name', async (req, res) => {
    let data = req.body

    const name = req.params.name
    name = name.replace("+", " ")
    let l = new logic(data.height, data.weight, data.age, data.sex, data.activity)
    l.name = name
    l.saveDate = moment()
    console.log(l);
    const up = new usersProfile(l)
    const u1 = new user(l)
    console.log(u1);
    u1.save()
    up.save()
    res.send("u1")
 })


router.put('/updateProfile/:name', (req, res) => {

    let data = req.body
    const name = req.params.name
    let l = new logic(data.height, data.weight, data.age, data.sex, data.activity)
    l.name = name
    l.saveDate = moment()
    const u1 = new user(l)
    u1.save()

    usersProfile.findOneAndUpdate({ name: name }, l, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        console.log(doc);

        return res.send("succesfully saved");
    })
})


/**
 * Just a simple route to delete something by it's id
 */
router.get('/food/:name', (req, res) => {
    let name = req.params.name
    name = "raw+" + name
    let url = `https://api.nal.usda.gov/ndb/search/?format=json&q=${name}&sort=n&max=1&offset=0&api_key=zVGkx37GaEO8h0hWHtLeQIVwZUWHZd0hB7p9ELEn`
    request(url, function (err, search) {
        let item = JSON.parse(search.body)
        let ndbno = item.list.item[0].ndbno
        console.log(ndbno);

        const url2 = `https://api.nal.usda.gov/ndb/reports/?ndbno=${ndbno}&type=b&format=json&api_key=zVGkx37GaEO8h0hWHtLeQIVwZUWHZd0hB7p9ELEn`
        request(url2, function (err, shit) {
            let food = JSON.parse(shit.body)
            let mes = food.report.food.nutrients

            let userFilter = mes.filter(u => (u.nutrient_id == 208) || (u.nutrient_id == 203)|| (u.nutrient_id == 204)|| (u.nutrient_id == 205))
            .map(u =>  {return{"name":u.name,
            unit : u.unit,
            value: u.value}})
            console.log(userFilter);
            // let userMap = users.map(u => { return { name: u.name, companyName: u.company } })
            // console.log(userMap);
            res.send(userFilter)
        })
    })
})


router.post('/getProfile/:name', (req, res) => {
    /**
     * create neu user fon the databace */

})





















router.put('/getProfile/:name', (req, res) => {
    /**
     *  crrete new page of the user in the databace */

})



module.exports = router


/**
 *
 *
 *
 * const mongoose = require( 'mongoose' )
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

 const user = mongoose.model( 'user', userSchema )

module.exports = user

 *
 */