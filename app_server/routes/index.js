const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');
const ctrlOthers = require('../controllers/others');

/* Track pages */
router.get('/', ctrlTracks.homelist);
router.get('/track', ctrlTracks.trackInfo);
router.get('/track/review/new', ctrlTracks.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
