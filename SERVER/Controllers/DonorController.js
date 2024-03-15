
const Donor = require('../Models/Donor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();


const createDonor = async (req, res) => {
    try {

        // 1st step : check for existing user
        // 2nd step: Generate Hash password (Encrypting)
        //3rd step: User Creation
        //4th step: token Generation

        // 1st step : check for existing user
        const { role, name, email, password, city, phone } = req.body;

        const existingUser = await Donor.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already Exists" })
        }



        // 2nd step: Generate Hash password (Encrypting)
        const hashedPassoword = await bcrypt.hash(password, 10);

        //3rd step: User Creation
        const donor = new Donor({
            role,
            name,
            email,
            password: hashedPassoword,
            city,
            phone
        })

        await donor.save();

        //4th step: token Generation
        const token = jwt.sign({ email: donor.email, id: donor._id }, process.env.SECRET_KEY, { expiresIn: '1d' });


        return res.status(201).json({ donor, token });
    }
    catch (error) {
        console.log("There is an error:", error)
        return res.status(500).send({ message: "Server Error" });
    }
}

const getDonor = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await Donor.findOne({ email: email });
        console.log(existingUser);
        if (!existingUser) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        return res.status(201).json({ existingUser, token, message: 'success' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find()
        res.status(200).send(donors);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getSingleDonor = async (req, res) => {
    try {
        const id = req.params.id
        const donor = await Donor.findOne({ _id: id });
        return res.status(200).send(donor);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateDonor = async (req, res) => {
    try {
        const id = req.params.id;
        const updateDonor = await Donor.findByIdAndUpdate(
            { _id: id },
            {
                name: req.body.name,
                email: req.body.email,
                city: req.body.city,
                phone: req.body.phone,
            }
        )
        res.status(200).json(updateDonor);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const deleteDonor = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        const deletedDonor = await Donor.findByIdAndDelete({ _id: id });
        console.log("Record Deleted");
        res.status(200).json({ deletedDonor });
    }
    catch (error) {
        console.log("This is an error");
        res.status(500).json({ message: "Internal server Error" });
    }
}
module.exports = { createDonor, getDonor, getAllDonors, deleteDonor, getSingleDonor, updateDonor };