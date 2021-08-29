const { conntectDB } = require('./data/index');
const { Admin } = require("./controllers/admin");

const express = require('express');

require('dotenv').config();

(async function runApp() {
    try {
        const app = express();

        app.use(Admin);
        await conntectDB();

        app.listen(process.env.PORT, () =>
            console.log(`Listening on port ${process.env.PORT}`)
        );
    } catch (err) {
        console.log("Problems initializitng the app", err);
    }
})();
