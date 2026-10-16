const mongoose = require('mongoose');
const Trackday = mongoose.model('TrackdayEvents');

const trackdaysList = function(req, res) {
    Trackday
    .find()
    .exec((err, trackdays) => {
      if (err) {
        res
          .status(500)
          .json({ "status": 500, "message": "Error occurred while fetching trackdays" });
      } else {
        res
          .status(200)
          .json({ "status": 200, "message": "Trackdays fetched successfully", "data": trackdays });
      }
    });
};

const trackdaysCreate = function(req, res) {
    Trackday
    .create(req.body)
    .then((trackday) => {
      if (!trackday) {
        return res
          .status(400)
          .json({ "status": 400, "message": "Trackday creation failed" });
      }
      res
        .status(201)
        .json({ "status": 201, "message": "Trackday created successfully", "data": trackday });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ "status": 500, "message": "Error occurred while creating trackday" });
    });
};

const trackdaysReadOne = function(req, res) {
   if(req.params && req.params.trackdayid) {
    Trackday
      .findById(req.params.trackdayid)
      .then((trackday) => {
        if (!trackday) {
          return res
            .status(404)
            .json({ "status": 404, "message": "Trackday not found" });
        }
        res
          .status(200)
          .json({ "status": 200, "message": "Trackday fetched successfully", "data": trackday });
   })
   .catch((err) => {
        res
          .status(500)
          .json({ "status": 500, "message": "Error occurred while fetching trackday" }); 
   }); 
} else {
       res
          .status(400)
          .json({ "status": 400, "message": "Trackday ID is required" });
   }
};

const trackdaysUpdateOne = function(req, res) {
    Trackday
    .findByIdAndUpdate(req.params.trackdayid, req.body, { new: true })
    .exec((err, trackday) => {
      if (err) {
        res
          .status(500)
          .json({ "status": 500, "message": "Error occurred while updating trackday" });
      } else {
        res
          .status(200)
          .json({ "status": 200, "message": "Trackday updated successfully", "data": trackday });
      }
    });
};
const trackdaysDeleteOne = function(req, res) {
    Trackday
    .findByIdAndRemove(req.params.trackdayid)
    .exec((err, trackday) => {
      if (err) {
        res
          .status(500)
          .json({ "status": 500, "message": "Error occurred while deleting trackday" });
      } else {
        res
          .status(200)
          .json({ "status": 200, "message": "Trackday deleted successfully", "data": trackday });
      }
    });
};

module.exports = {
  trackdaysList,
  trackdaysCreate,
  trackdaysReadOne,
  trackdaysUpdateOne,
  trackdaysDeleteOne
};

