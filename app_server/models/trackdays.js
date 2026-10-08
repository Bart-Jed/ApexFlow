const mongoose = require('mongoose');
const trackdaySchema = new mongoose.Schema({
  trackName: { type: String, required: true},
  date: { type: Date, required: true},
  organiser: String,
  price: { type: Number, min: 0, required: true},
  spaces: { type: Number, min: 0, required: true},
  address: String,
  coords: { type: [Number], index: '2dsphere'}
});

mongoose.model('TrackdayEvents', trackdaySchema);
