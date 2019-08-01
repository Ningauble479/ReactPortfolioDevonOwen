const express = require('express');
var cors = require('cors');
const routes = require('./routes')
const API_PORT = 3001;
const mongoose = require('mongoose')
const app = express();
app.use(cors());





const dbRoute = 'mongodb+srv://Fallen-angel:<password>@cluster0-dqrcl.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', routes)

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));