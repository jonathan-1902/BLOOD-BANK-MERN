
const express = require('express');

const router = express.Router();
const hospital = require('../Models/Admin');
const hospitalController = require('../Controllers/HospitalController');

// Create Admin in db
router.post('/add-hospital', hospitalController.createHospital);

//Login Hospital
router.post('/get-hospital', hospitalController.getHospital);

//get all the list of hospitals
router.post('/getallhospitals', hospitalController.getAllHospitals);

//get single hospital
router.post('/singlehospital/:id', hospitalController.singleHospital);

//To update hospital record
router.post('/update/:id', hospitalController.updateHospital);
//To delete a hospital record 
router.post('/delete/:id', hospitalController.deleteHospital);


module.exports = router;
