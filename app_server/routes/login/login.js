const express = require('express');
const router = express.Router();
const ctrlAuth = require('../../controllers/auth');

router.get('/login', ctrlAuth.loginPage);
router.post('/login', ctrlAuth.doLogin);

module.exports = router;
