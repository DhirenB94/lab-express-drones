const express = require('express');
const DroneModel = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  let dronesFromDB = await DroneModel.find()
    res.render('drones/list', {dronesFromDB})
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
    const {name, propellers, maxSpeed} = req.body
    await DroneModel.create(req.body)
    res.redirect('/drones/')
  })

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
