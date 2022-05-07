const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
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

exports.deleteUser = catchAsync(async (req, res) => {
  const users = await User.findByIdAndDelete(req.params.id);
  if (!users) return next(new AppError(`User with id: ${req.params.id} not found`, 404))
  await res.status(204).json({"status": "success"})
})