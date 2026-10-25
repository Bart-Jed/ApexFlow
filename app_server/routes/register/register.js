const express = require('express');
const router = express.Router();
const ctrlAuth = require('../../controllers/auth');

router.get('/register', ctrlAuth.registerPage);
router.post('/register', ctrlAuth.doRegister);

module.exports = router;
