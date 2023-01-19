const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery', true);
const dbconnection = mongoose.connect(process.env.mongoURL)
module.exports = dbconnection;