
const Organization = require('../Models/Organization');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();

const createOrganization = async (req, res) => {
    try {

        // 1st step : check for existing user
        // 2nd step: Generate Hash password (Encrypting)
        //3rd step: User Creation
        //4th step: token Generation


        // 1st step : check for existing user

        const { role, organization, email, password, city, phone } = req.body;

        const existingUser = await Organization.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already Exists" })
        }

        // 2nd step: Generate Hash password (Encrypting)
        const hashedPassword = await bcrypt.hash(password, 10);

        //3rd step: User Creation

        const organizations = new Organization({
            role,
            organization,
            email,
            password: hashedPassword,
            city,
            phone
        })

        await organizations.save();

        //4th step: token Generation
        const token = jwt.sign({ email: organizations.email, id: organizations._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
        res.status(200).send({ organizations, token });

    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}

const getOrganizations = async (req, res) => {
    try {

        const { email, password } = req.body;

        const existingUser = await Organization.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: "User Not Found" });
        }

        const matchedPassword = await bcrypt.compare(password, existingUser.password)

        if (!matchedPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        return res.status(201).json({ existingUser, token, message: 'success' });

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server Error" });

    }
}

const getAllOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find();
        res.status(200).send(organizations);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server Error" });
    }
}

const singleOrganization = async (req, res) => {
    console.log("hello")
    try {
        const id = req.params.id
        const organization = await Organization.findOne({ _id: id });
        return res.status(200).send(organization);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server Error" });
    }
}

const updateOrganization = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedOrganization = await Organization.findByIdAndUpdate(
            { _id: id },
            {
                organization: req.body.organization,
                email: req.body.email,
                city: req.body.city,
                phone: req.body.phone,
            }
        )
        res.status(200).send(updatedOrganization);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server Error" });
    }
}

const deleteOrganization = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        const deletedOrganization = await Organization.findByIdAndDelete({ _id: id });
        console.log("Record Deleted");
        res.status(200).json({ deletedOrganization });
    }
    catch (error) {
        console.log("This is an error");
        res.status(500).json({ message: "Internal server Error" });
    }
}
module.exports = { createOrganization, getOrganizations, getAllOrganizations, deleteOrganization, singleOrganization, updateOrganization };
