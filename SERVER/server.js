
const express = require('express')
const dotEnv = require('dotenv')

const mongoose = require('mongoose')
const colors = require('colors')
const cors = require('cors');
const donorRoute = require('./Routes/donorRoute');
const adminRoute = require('./Routes/adminRoute');
const organizationRoute = require('./Routes/organizationRoute')
const hospitalRoute = require('./Routes/hospitalRoute');
const inventoryInRoute = require('./Routes/InventoryInRoute');
const inventoryOutRoute = require('./Routes/InventoryOutRoute');

const app = express();

const PORT = process.env.PORT || 5000;

dotEnv.config();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongodb Connected Successfully".bgMagenta.white);
    })
    .catch((error) => {
        console.log(error);
    })

app.use('/donors', donorRoute);
app.use('/admin', adminRoute);
app.use('/organization', organizationRoute);
app.use('/hospital', hospitalRoute);
app.use('/inventoryIn', inventoryInRoute);
app.use('/inventoryOut', inventoryOutRoute);



app.listen(PORT, () => {
    console.log(`Server Started successfully at Port ${PORT}`.bgBlue.white);
})