const express = require('express');
const router = express.Router();
const ctrlTrackdays = require('../controllers/trackdays');

// Trackdays
router.route('/trackdays')
  .get(ctrlTrackdays.trackdaysList)
  .post(ctrlTrackdays.trackdaysCreate);

router.route('/trackdays/:trackdayid')
  .get(ctrlTrackdays.trackdaysReadOne)
  .put(ctrlTrackdays.trackdaysUpdateOne)
  .delete(ctrlTrackdays.trackdaysDeleteOne);

module.exports = router;