const AppError = require("../utils/appError")

const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({"status": err.status, "message": err.message, "error": err, "stack": err.stack})
}

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode).json({"status": err.status, "message": err.message})
    } else {
        return res.status(500).json({"status": "error", "message": "Something went wrong"})
    }
}

const handleCastErrorDB = err => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
  };
  
const handleDuplicateFieldsDB = err => {
const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
console.log(value);

const message = `Duplicate field value: ${value}. Please use another value!`;
return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
    console.log('triggered22')
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data: ${errors.join('. ')}`;
    return new AppError(message, 400);
}

const handleJWTError = err => new AppError('Invalid Token! Login Again', 401);

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'Failed';
    if (process.env.NODE_ENV === 'development') sendErrorDev(err, res);
    else if (process.env.NODE_ENV === 'production') {
        if (err.name === 'CastError') err = handleCastErrorDB(err);
        if (err.name === 'ValidationError') err = handleValidationErrorDB(err);
        if (err.name === 'JsonWebTokenError') err = handleJWTError(err);
        if (err.code === 11000) err = handleDuplicateFieldsDB(err);

        sendErrorProd(err, res);
    }
}