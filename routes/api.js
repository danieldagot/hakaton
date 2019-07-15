const express = require( 'express' )
const router = express.Router()
const ColorModel = require( '../mongoose/models/color' )
const ColorsApi = require( '../lib/colors-api' )

let api = new ColorsApi()

router.get( '/colors', ( req, res ) => {
    ColorModel.find( {}, ( err, data ) => res.json( data ) )
} )

/**
 * Search the color in the external API and save it
 * After the save action, display it to the client
 */
router.get( '/color/:hex', async ( req, res ) => {
    const color = req.params.hex
    const result = await api.fetchColorByName( color )

    const model = new ColorModel( result )

    model.save( () => res.json( { success: true, color: result } ) )
} )

/**
 * Just a simple route to delete something by it's id
 */
router.delete( '/color/:id', ( req, res ) => {
    const id = req.params.id
} )

/**
 * POST route to create a new color
 * Receives the color body and save it in the db
 */
router.post( '/color', ( req, res ) => {
    const colorBody = req.body
    const color = new ColorModel( colorBody )

    color.save( () => res.json( { success: true } ) )
} )

module.exports = router
