const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const droneSchema = new Schema ({
    name: String,
    propellors: Number, 
    maxSpeed: Number
}, {
    timestamps: true
})

module.exports = model('Drone', droneSchema);