
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let admin = { username: 'admin', password: bcrypt.hashSync('password', 10) };

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username !== admin.username || !bcrypt.compareSync(password, admin.password)) {
        return res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ status: 'success', data: { token } });
};

exports.updatePassword = (req, res) => {
    const { username, newPassword } = req.body;
    if (username !== admin.username) {
        return res.status(403).json({ status: 'fail', message: 'Unauthorized' });
    }
    admin.password = bcrypt.hashSync(newPassword, 10);
    res.status(200).json({ status: 'success', message: 'Password updated' });
};
    