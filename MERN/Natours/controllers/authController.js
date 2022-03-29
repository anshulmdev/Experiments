const jwt = require('jsonwebtoken');
const { promisify } = require('util')
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = catchAsync(async (req, res, next) => {
    const { name, email, password, passwordConfirm } = req.body;
    const newUser = await User.create({ name, email, password, passwordConfirm });
    const token = signToken(newUser._id)

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })
    next();
});


exports.login = catchAsync( async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return next(new AppError(`Please provide email and password`, 400));
    const user = await User.findOne({ email }).select('+password');

    if (!user || !await user.correctPassword(password, user.password)){
         return next(new AppError(`Incorrect email or password`, 401));
    }

    const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token
    })
})

exports.protect = catchAsync( async(req, res, next) => {
    const { authorization } = req.headers;
    let token;
    let user;
    // Getting Token
    if (authorization && authorization.startsWith('Bearer')) token = authorization.split(' ')[1];
    else return next(new AppError(`User not logged In`, 401));
    // Verifying Token
    const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    if (decodedToken) user = await User.findOne({ _id: decodedToken.id }).select('+password');
    else return next(new AppError(`Token is not Valid!`, 401));

    console.timeLog(user)
    
    next();
})