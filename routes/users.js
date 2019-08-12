import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('These are not the users you are looking for..');
});

// Add new user
router.post('/', (req, res, next) => {
  // TODO create middleware for validation
  const unverifiedUserData = req.body.newUser;

  // TODO verify userData, create a new user, and save to mongodb


  // TODO return user id
  res.status(201).send(`User created`);
});

router.get('/:userId', (req, res, next) => {

});

export default router;
