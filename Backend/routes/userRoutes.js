// Backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');

// Register route
router.post('/register', createUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
