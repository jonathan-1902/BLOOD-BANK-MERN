
const InventoryIn = require('../Models/InventoryIn');


const createRecords = async (req, res) => {
    try {
        const { bloodGroup, inventoryType, quantity, email, date } = req.body;

        const inventoryIn = new InventoryIn({
            bloodGroup,
            inventoryType,
            quantity,
            email,
            date
        })

        await inventoryIn.save();
        return res.status(200).json({ inventoryIn })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const getRecords = async (req, res) => {
    try {
        const inDetails = await InventoryIn.find();
        return res.status(200).json({ inDetails });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { createRecords, getRecords };