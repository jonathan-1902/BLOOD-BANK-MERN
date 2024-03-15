const express = require('express');
const router = express.Router();

const inventoryOutController = require('../Controllers/InventoryOutController');
const inventoryOut = require('../Models/InventoryOut');

//create In Details in db
router.post('/bloodout', inventoryOutController.createRecords)

router.post('/getBloodOut', inventoryOutController.getRecords);

module.exports = router;