const express = require('express');
const {checkId, getAllTours, createTour, getTour, updateTour, deleteTour, checkBody, getTourStats} = require('../controllers/tourController');
const { protect } = require('../controllers/authController');
const router = express.Router();

router.param('id', checkId);

router.route('/tour-stats').get(getTourStats);
router
    .route('/')
    .get(protect, getAllTours)
    .post(checkBody, createTour)

router
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;
