const express = require('express');
const {checkId, getAllTours, createTour, getTour, updateTour, deleteTour, checkBody, bulk} = require('../controllers/tourController');
const router = express.Router();

router.param('id', checkId);

router
    .route('/')
    .get(getAllTours)
    .post(checkBody, createTour)
    .put(bulk);

router
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;