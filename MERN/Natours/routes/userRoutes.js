const express = require('express');
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { signup, login, protect, restrictTo } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(protect, restrictTo('admin'), deleteUser);

module.exports = router;
