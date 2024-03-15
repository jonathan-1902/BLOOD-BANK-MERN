
const InventoryOut = require('../Models/InventoryOut');


const createRecords = async (req, res) => {
    try {
        const { bloodGroup, inventoryType, quantity, email, date } = req.body;

        const inventoryOut = new InventoryOut({
            bloodGroup,
            inventoryType,
            quantity,
            email,
            date
        })

        await inventoryOut.save();
        return res.status(200).json({ inventoryOut })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const getRecords = async (req, res) => {
    try {
        const outDetails = await InventoryOut.find();
        return res.status(200).json({ outDetails });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { createRecords, getRecords };