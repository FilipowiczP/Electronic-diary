const express = require('express');

require('dotenv').config();

(async function runApp() {
    try {
        const app = express();

        app.listen(process.env.PORT, () =>
            console.log(`Listening on port ${process.env.PORT}`)
        );
    } catch (err) {
        console.log("Problems initializitng the app", err);
    }
})();
