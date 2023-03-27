

const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect
    (process.env.MONGO_DB_URI)
    .then(() => console.log('databases connected'))
    .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('server is runnig', process.env.PORT)
})