

const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log('databases connected'))
    .catch((err) => console.log(err))

const resRoutes = require('./routes/restaurants.route.js');
const userRoutes = require('./routes/user.route.js')

app.use('/api', resRoutes);
app.use('/api', userRoutes);


app.listen(process.env.PORT, () => {
    console.log('server is runnig', process.env.PORT)
})