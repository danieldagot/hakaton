const express = require( 'express' )
const router = express.Router()
const logic = require( "../logic/logic.js" )


//let api = new ColorsApi()

router.get( '/getProfile', ( req, res ) => {
   let data = req.body
   console.log(data);
   
   let l = new logic(data.height,data.weight,data.age,data.sex,data.activity)
   res.send(l)
} )


router.get( '/getProfile/:name', async ( req, res ) => {
  /**
   * gets the latest data  ofthe user fropm the database  
   *  let wonder = req.params.name
   * 
   */
} )

/**
 * Just a simple route to delete something by it's id
 */
router.delete( '/color/:id', ( req, res ) => {
  
} )


router.post( '/getProfile/:name', ( req, res ) => {
/**
 * create neu user fon the databace */    

} )


router.put( '/getProfile/:name', ( req, res ) => {
    /**
     *  crrete new page of the user in the databace */    
    
    } )
    
    
    














module.exports = router
