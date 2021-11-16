// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb');
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
//const product = require('./routes/product.route'); // Imports routes for the products
// initialize our express app
const app = express();
const port = process.env.PORT || 1234
// Configuration

app.set('views', __dirname + '/views');
//app.use(express.bodyDecoder());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())



mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

//app.use('/products', product);
// Require Notes routes
require('./routes/note.routes.js')(app);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
