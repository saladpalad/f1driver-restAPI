const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true

    },
    constructorTeam: {
        type: String,
        required: true

    },
    driverStanding2022: {
        type: String,
        required: true

    }
})
module.exports = mongoose.model('Driver', driverSchema)
