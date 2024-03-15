
const express = require('express');
const router = express();

const Organization = require('../Models/Organization');
const organizationController = require('../Controllers/OrganizationController');

// create Organization in db
router.post('/add-organization', organizationController.createOrganization);

//Login as organization
router.post('/get-organization', organizationController.getOrganizations);

//All organization details
router.post('/getallorganizations', organizationController.getAllOrganizations);

//singleOrganization
router.post('/singleorganization/:id', organizationController.singleOrganization);

//update organization
router.post('/update/:id', organizationController.updateOrganization);
//To delete Organization
router.post('/delete/:id', organizationController.deleteOrganization);

module.exports = router;