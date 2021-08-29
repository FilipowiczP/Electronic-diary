const { Router } = require('express');

const Admin = Router();

Admin.get("/admin", (req, res) => {
    if (req.body.login === process.env.ADMIN && req.body.password === process.env.ADMIN_PASSWORD) {
        res.send("działa")
    }
});

module.exports = {
    Admin: Admin
}