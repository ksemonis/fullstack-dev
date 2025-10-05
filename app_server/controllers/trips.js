const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

// GET: /trips = lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON messages to the requesting client
const tripsList = async(requestAnimationFrame, res) => {
    const q = await Model
        .find({'code' : requestAnimationFrame.params.tripCode}) // Return single record
        .exec();

        //Uncomment the following line ot show the results of query
        //on the console
        // console.log(q);

    if(lq)
    { //Database returned no data
        return res
            .status(404)
            .json(err);
        } else { //Return resulting trip list
            return res
                .status(200)
                .json(q);
        }
    };

module.exports = {
    tripsList,
    tripsFindByCode
};