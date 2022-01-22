const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));
const Tour = require('../Models/tourModel');


exports.checkId =(req, res, next, val) => {
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

exports.getAllTours = async (req, res) => {
    try{
      const tours = await Tour.find()
      await res.status(201).json({"status": "success","results": tours.length, data: tours})
    }catch(err){
      res.status(404).json({"status":"Failed", "messgae": err.message})
    }
  }
  
exports.createTour = async (req, res) => {
  try{
    const newTour = await Tour.create(req.body)
    await res.status(201).json({"status": "success", data: newTour})
  } catch(err){
    res.status(404).json({"status":"Failed", "messgae": err.message})
  }
  }
  
exports.getTour = async (req, res) => {
  try{
    const tours = await Tour.findById(req.params.id);
    await res.status(201).json({"status": "success", data: tours});
  }catch(err){
    res.status(404).json({"status":"Failed", "messgae": err.message})
  }
}
  
exports.updateTour = async (req, res) => {
  try{
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    await res.status(201).json({"status": "success", data: tour})
  } catch(err){
    res.status(404).json({"status":"Failed", "messgae": err.message})
  }
  }
  
exports.deleteTour = async (req, res) => {
  try{
    await Tour.findByIdAndDelete(req.params.id);
    await res.status(204).json({"status": "success"})
  } catch(err){
    res.status(404).json({"status":"Failed", "messgae": err.message})
  }
  }