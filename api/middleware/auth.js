
const jwt = require('jsonwebtoken');

exports.authenticateAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ status: 'fail', message: 'Token required' });
    try {
        const decoded = jwt.verify(token.split(' ')[1], 'secretkey');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ status: 'fail', message: 'Invalid token' });
    }
};
    