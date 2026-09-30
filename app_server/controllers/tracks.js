/* GET 'home' page */
const homelist = function (req, res) {
  res.render('tracks-list', { title: 'Home' });
};

/* GET 'Track info' page */
const trackInfo = function (req, res) {
  res.render('tracks-info', { title: 'Track info' });
};

/* GET 'Add review' page */
const addReview = function (req, res) {
  res.render('tracks-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  trackInfo,
  addReview
};
