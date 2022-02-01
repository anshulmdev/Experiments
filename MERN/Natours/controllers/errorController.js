const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({"status": err.status, "message": err.message, "error": err.error, "stack": err.stack})
}

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode).json({"status": err.status, "message": err.message})
    } else {
        return res.status(500).json({"status": "error", "message": "Something went wrong"})
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'Failed';

    if (process.env.NODE_ENV === 'development') sendErrorProd(err, res);
    else if (process.env.NODE_ENV === 'production') sendErrorDev(err, res);
}