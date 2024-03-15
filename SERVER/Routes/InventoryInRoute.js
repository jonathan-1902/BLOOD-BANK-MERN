const express = require('express');
const router = express.Router();

const inventoryInController = require('../Controllers/InventoryInController');
const inventoryIn = require('../Models/InventoryIn');

//create In Details in db
router.post('/bloodin', inventoryInController.createRecords)

//get In Details Records
router.post('/getBloodIn', inventoryInController.getRecords);

module.exports = router;