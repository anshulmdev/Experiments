const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllUsers = catchAsync(async (req, res) => {
  const features = new APIFeatures(User.find(), req.query)
  .filter()
  .sort()
  .limitFields()
  .paginate()

  const users = await features.query
  await res.status(201).json({"status": "success","results": users.length, data: users})

})

exports.createUser = (req, res) => {
  res.status(500).json({"status":"Create Endpoint: Not Completed"})
}

exports.getUser = (req, res) => {
  res.status(500).json({"status":"Get Endpoint: Not Completed"})
}

exports.updateUser = (req, res) => {
  res.status(500).json({"status":"Update Endpoint: Not Completed"})
}

exports.deleteUser = (req, res) => {
  res.status(500).json({"status":"Delete Endpoint: Not Completed"})
}