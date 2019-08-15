import express from 'express';
const router = express.Router();

import { User } from '../models';

/* GET users listing. */
router.get( '/', ( req, res, next ) => {
  res.send( 'These are not the users you are looking for..' );
} );

// Add new user
router.post( '/', ( req, res, next ) => {
  console.log( req.body );
  // TODO create middleware for validation
  const newUserData = req.body;

  // TODO verify userData, create a new user, and save to mongodb
  const user = new User( {
    username: newUserData.username,
    password: newUserData.password,
    email: newUserData.email
  } );

  user.save( err => {
    if ( err ) console.log( err );
  } );
  res.status( 201 ).send( `User created ${user._id}` );
} );

router.get( '/:userId', ( req, res, next ) => {} );

export default router;
