
const Hospital = require('../Models/Hospital');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();

const createHospital = async (req, res) => {
    try {

        const { role, hospital, email, password, city, phone } = req.body;

        const existingUser = await Hospital.findOne({ email: email });
        if (existingUser) {
            res.status(400).json({ message: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const hospitals = new Hospital({
            role,
            hospital,
            email,
            password: hashedPassword,
            city,
            phone
        })

        await hospitals.save();

        const token = jwt.sign({ email: hospitals.email, id: hospitals._id }, process.env.SECRET_KEY, { expiresIn: '1d' })

        res.status(200).json({ hospitals, token });
    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}



const getHospital = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await Hospital.findOne({ email: email });

        if (!existingUser) {
            res.status(404).json({ message: "User Not Found" });
        }

        const matchedPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchedPassword) {
            res.status(400).json({ message: "Invalid Credentials" })
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        return res.status(200).json({ existingUser, token, message: "success" });

    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}


const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        return res.status(200).send(hospitals);
    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}

const singleHospital = async (req, res) => {
    try {
        const id = req.params.id
        const hospital = await Hospital.findOne({ _id: id });
        return res.status(200).send(hospital);
    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}

const updateHospital = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedOrganization = await Hospital.findByIdAndUpdate(
            { _id: id },
            {
                hospital: req.body.hospital,
                email: req.body.email,
                city: req.body.city,
                phone: req.body.phone,
            }
        )
        res.status(200).send(updatedOrganization);
    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}
const deleteHospital = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        const deletedHospital = await Hospital.findByIdAndDelete({ _id: id });
        console.log("Record Deleted");
        res.status(200).json({ deletedHospital });
    }
    catch (error) {
        console.log("This is an error");
        res.status(500).json({ message: "Internal server Error" });
    }
}
module.exports = { createHospital, getHospital, getAllHospitals, deleteHospital, singleHospital, updateHospital };