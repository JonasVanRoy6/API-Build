
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /auth/login
router.post('/login', authController.login);

// PATCH /auth/password
router.patch('/password', authController.updatePassword);

module.exports = router;
    