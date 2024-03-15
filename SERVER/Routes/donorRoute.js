const express = require('express');
const router = express.Router();
const donorController = require('../Controllers/DonorController');
const Donor = require('../Models/Donor')

//To create a donor in db
router.post('/add-donor', donorController.createDonor);

// To Login a donor
router.post('/get-donor', donorController.getDonor);

//to get single donor
router.post('/singledonor/:id', donorController.getSingleDonor);

//To get all the donors
router.post('/getalldonors', donorController.getAllDonors);

router.post('/update/:id', donorController.updateDonor);
// To delete the donor
router.post('/delete/:id', donorController.deleteDonor);


module.exports = router;
