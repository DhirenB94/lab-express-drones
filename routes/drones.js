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

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  const drone = await DroneModel.findById(droneId)
  res.render('drones/update-form', {drone})
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id
  const {name, propellers, maxSpeed} = req.body
  await DroneModel.findByIdAndUpdate(droneId, req.body);
  res.redirect('/drones/')
});


router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id
  await DroneModel.findByIdAndDelete(droneId)
  res.redirect('/drones/')
});

module.exports = router;
