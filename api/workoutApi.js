export const WORKOUT_API = {

  getWorkouts: async (req, res, next) => {
    try {
      res.send('hello');
    } catch(err) {
      next(err);
      throw new Error('Could not get workouts ' + err);
    }
  }
};