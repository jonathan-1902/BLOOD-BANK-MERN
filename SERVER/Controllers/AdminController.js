
const Admin = require('../Models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();

const createAdmin = async (req, res) => {
    try {

        // 1st step : check for existing user
        // 2nd step: Generate Hash password (Encrypting)
        //3rd step: User Creation
        //4th step: token Generation
        const { role, name, email, password, city, phone } = req.body;


        const existingUser = await Admin.findOne({ email: email });
        if (existingUser) {
            console.log("Hello");
            return res.status(400).json({ message: "User already Exists" })
        }

        // 2nd step: Generate Hash password (Encrypting)
        const hashedPassword = await bcrypt.hash(password, 10);

        //3rd step: User Creation

        const admin = new Admin({
            role,
            name,
            email,
            password: hashedPassword,
            city,
            phone
        })

        await admin.save();

        //4th step: token Generation
        const token = jwt.sign({ email: admin.email, id: admin._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        res.status(200).send({ admin, token });
    }
    catch (error) {
        console.log("There is an error:", error)
        res.status(500).send({ message: "Server Error" });
    }
}

const getAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await Admin.findOne({ email: email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        const matchedPassword = await bcrypt.compare(password, existingUser.password);
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
module.exports = { createAdmin, getAdmin };