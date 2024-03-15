const express = require('express');

const router = express.Router();
const admin = require('../Models/Admin');
const adminController = require('../Controllers/AdminController');

// Create Admin in db
router.post('/add-admin', adminController.createAdmin);

// Login Admin
router.post('/get-admin', adminController.getAdmin);


module.exports = router;
