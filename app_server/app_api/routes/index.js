const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router.route("/trips").get(tripsController.tripsList);

// GET method routes tripsFindByCode = requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .post(tripsController.tripsAddTrip) //POST Method adds a trip
    .put(tripsController.tripsUpdateTrip); //PUT Method updates a trip

module.exports = router;