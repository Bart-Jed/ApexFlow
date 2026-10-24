const mongoose = require('mongoose');
const Trackday = mongoose.model('TrackdayEvents');

const trackdaysList = function(req, res) {
    Trackday
    .find()
    .exec()
    .then((trackdays) => {
      if (!trackdays) {
        return res
          .status(404)
          .json({ "status": 404, "message": "No trackdays found" });
      }
      res
        .status(200)
        .json({ "status": 200, "message": "Trackdays fetched successfully", "data": trackdays });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ "status": 500, "message": "Error occurred while fetching trackdays." });
      console.error(err);
    });
};

const trackdaysCreate = function(req, res) {
    Trackday
    .create(req.body)
    .then((trackday) => {
      res
        .status(201)
        .json({ "status": 201, "message": "Trackday created successfully", "data": trackday });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res
          .status(400)
          .json({ "status": 400, "message": "Validation error occurred while creating trackday, " + err.message });
      }
      res
        .status(500)
        .json({ "status": 500, "message": "Error occurred while creating trackday." });
      console.error(err);
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
      if(err.name === 'CastError' && err.path === '_id') {
        return res
          .status(400)
          .json({ "status": 400, "message": "Invalid trackday ID, " + err.message });
      }
      res
        .status(500)
        .json({ "status": 500, "message": "Error occurred while fetching trackday." });
      console.error(err);
   }); 
} else {
       res
          .status(400)
          .json({ "status": 400, "message": "Trackday ID is required" });
   }
};

const trackdaysUpdateOne = function(req, res) {
    Trackday
    .findByIdAndUpdate(req.params.trackdayid, req.body, { new: true, runValidators: true })
    .exec()
    .then((trackday) => {
      if (!trackday) {
        return res
          .status(404)
          .json({ "status": 404, "message": "Trackday not found" });
      }
      res
        .status(200)
        .json({ "status": 200, "message": "Trackday updated successfully", "data": trackday });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res
          .status(400)
          .json({ "status": 400, "message": "Validation error occurred while updating trackday, " + err.message });
      }
      if(err.name === 'CastError' && err.path === '_id') {
        return res
          .status(400)
          .json({ "status": 400, "message": "Invalid trackday ID, " + err.message });
      }
      if(err.name === 'CastError' && err.path === 'price') {
        return res
          .status(400)
          .json({ "status": 400, "message": "Invalid trackday price, " + err.message });
      }
      res
        .status(500)
        .json({ "status": 500, "message": "Error occurred while updating trackday." });
      console.error(err);
    });
};

const trackdaysDeleteOne = function(req, res) {
    Trackday
    /* Had to change from findByIdAndRemove to findByIdAndDelete because findByIdAndRemove was removed in Mongoose 8*/
    .findByIdAndDelete(req.params.trackdayid)
    .exec()
    .then((trackday) => {
      if (!trackday) {
        return res
          .status(404)
          .json({ "status": 404, "message": "Trackday not found" });
      }
      res
        .status(200)
        .json({ "status": 200, "message": "Trackday deleted successfully", "data": trackday });
    })
    .catch((err) => {
      if(err.name === 'CastError' && err.path === '_id') {
        return res
          .status(400)
          .json({ "status": 400, "message": "Invalid trackday ID, " + err.message });
      }
      res
        .status(500)
        .json({ "status": 500, "message": "Error occurred while deleting trackday" });
      console.error(err);
    });
};

module.exports = {
  trackdaysList,
  trackdaysCreate,
  trackdaysReadOne,
  trackdaysUpdateOne,
  trackdaysDeleteOne
};

