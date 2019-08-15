import express from 'express';
const ROUTER = express.Router();

/* GET home page. */
ROUTER.get( '/', ( req, res ) => res.send( 'hello world!' ) );

export { ROUTER };
