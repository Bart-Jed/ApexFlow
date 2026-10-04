/* Create `tracks` array */
const tracks = [
      {
        name: 'Mondello Park',
        address: 'Naas, Co.Kildare',
        rating: 4,
        distance: '250km',
        image: '/images/mondello.jpg',
        facilities: ['Pit garages', 'Cafe', 'Track days']
      },
      {
        name: 'Tipperary Raceway',
        address: 'Rosegreen, Co.Tipperary',
        rating: 3,
        distance: '150km',
        image: '/images/tippRaceway.jpg',
        facilities: ['Pit garages']
      },
      {
        name: 'Coming Soon',
        address: '...',
        rating: 0,
        distance: '0km',
        image: '/images/error.jpg',
        facilities: ['N/A']
      }
];

/* GET 'saved' array */
const saved = [
  { name: 'Mondello Park', date: 'N/A', price: '€250', image: '/images/mondello.jpg'}, 
  {name: 'Tipperary Raceway', date: 'N/A', price: 'N/A', image: '/images/mondello.jpg'} 
];

/* GET 'home' page */
const homelist = function (req, res) {
  res.render('tracks-list', { title: 'Home', tracks, saved });
};

/* GET 'Track info' page */
const trackInfo = function (req, res) {
  res.render('tracks-info', {
    title: 'Track info',
    track: {
      name: 'Mondello Park',
      address: 'Naas, Co.Kildare',
      facilities: ['Pit garages', 'Cafe', 'Track days']
    }
  });
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
