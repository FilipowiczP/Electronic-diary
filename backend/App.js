const { conntectDB } = require('./data/connect');
const { Admin } = require("./controllers/admin");

const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config();

(async function runApp() {
    try {
        const app = express();

        app.use(cors());
        app.use(bodyParser.json());
        app.use(Admin);

        await conntectDB();

        app.listen(process.env.PORT, () =>
            console.log(`Listening on port ${process.env.PORT}`)
        );
    } catch (err) {
        console.log("Problems initializitng the app", err);
    }
})();
