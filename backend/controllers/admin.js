const { Router } = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const Admin = Router();

Admin.post("/admin", async (req, res) => {

    if (req.body.login == process.env.ADMIN && req.body.password == process.env.PASSWORD_ADMIN) {
        const token = await jwt.sign({ user: req.body.login }, 'xxx', { expiresIn: '1h' });
        res.send(token);
    }

});

module.exports = {
    Admin: Admin
}