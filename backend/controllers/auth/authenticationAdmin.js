const jwt = require('jsonwebtoken');

const authenticateMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'xxx', (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        console.log(user);
        (req).user = user;
        next();
    });
};

module.exports = {
    authenticateMiddleware: authenticateMiddleware
}