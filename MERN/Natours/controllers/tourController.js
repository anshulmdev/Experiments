const fs = require('fs');
const APIFeatures = require('../utils/apiFeatures');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));
const Tour = require('../Models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.checkId = (req, res, next, val) => {
  console.log('Value', val)
  if(req.params.id * 1 > tours.length) {
    return res.status(404).json({"status":"failed", "message": "Invalid ID"})
  }
  next();
}

exports.checkBody = (req, res, next) => {
  console.log('Triggered')
  const {name, price} = req.body;
  if (!name || !price) {
    return res.status(400).json({"status":"failed", "message":"Parameters missing from body"})
  }
  next();
}


exports.getAllTours = catchAsync(async (req, res) => {
      const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()

      const tours = await features.query
      await res.status(201).json({"status": "success","results": tours.length, data: tours})

  })
  
exports.createTour = catchAsync(async (req, res) => {
    const newTour = await Tour.create(req.body)
    await res.status(201).json({"status": "success", data: newTour})
  })
  
exports.getTour = catchAsync(async (req, res, next) => {
    const tours = await Tour.findById(req.params.id);
    if (!tours) return next(new AppError(`Tour with id: ${req.params.id} not found`, 404))
    await res.status(201).json({"status": "success", data: tours});
})
  
exports.updateTour = catchAsync(async (req, res) => {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!tours) return next(new AppError(`Tour with id: ${req.params.id} not found`, 404))
    await res.status(201).json({"status": "success", data: tour})
  })
  
exports.deleteTour = catchAsync(async (req, res) => {
    const tours = await Tour.findByIdAndDelete(req.params.id);
    if (!tours) return next(new AppError(`Tour with id: ${req.params.id} not found`, 404))
    await res.status(204).json({"status": "success"})
  })

exports.getTourStats = catchAsync(async (req, res) => {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } }
      },
      {
        $group: {
          _id: { $toUpper: '$difficulty'},
          numTours: { $sum: 1 },
          numRatings: { $sum: '$ratingsQuantity'},
          avgRating: { $avg: '$ratingsAverage'},
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' }
        }
      },
      { 
        $sort: { avgPrice: 1}
      }
    ])
    await res.status(200).json({"status": "success", data: stats})
})