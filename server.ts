// ============ Various Helper Libraries ============ 
const path = require("path");
// ==================================================


// ============ Express ============
const express = require("express");
const app = express();


// ============ Body Parser ============ 
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// =========== Static Directory =========== 
// app.use(express.static(__dirname + '/public'));


// =========== Morgan (optional) =========== 
const morgan = require("morgan");
app.use(morgan('dev'));


// =========== CORS =========== 
const cors = require("cors");
app.use(cors());


// ============ Session ============ 
// Will require: express/app
app.set('trust proxy', 1) // trust first proxy
app.use(require('cookie-session')({
    keys: ['keyboard cat'],
    overwrite: false,
    maxAge: 600000
}));

// =========== =========== DATABASE =========== ===========

// =========== Postgres ===========
// import "./config/mysql.config";

// =========== MySQL ===========
// import "./config/mysql.config";

// =========== Sequelize ===========
require("./config/sequelize.config");


// ============ Auth ============ 
// import { isAuthenticated } from './config/auth.config'
// app.use(isAuthenticated);


// =========== =========== ROUTES =========== ===========
// import routes from './config/routes.config';
// routes(app);
// app.use(express.static('dist'));


// ============ Server ============
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`API Server listening on port ${PORT}...`);
});