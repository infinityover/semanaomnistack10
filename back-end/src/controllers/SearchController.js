
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res){
        const { latitude, longitude, techs } = req.query;
        let techsArray = null;
        if(techs){ techsArray = parseStringAsArray(techs); }
        
        console.log(techsArray)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                $maxDistance: 10000,
                }
            }

        })
        
        return res.json({devs})

    }   
}