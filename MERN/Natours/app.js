const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController')

const dotenv = require('dotenv');
dotenv.config({'path':'./config.env'})

const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static(`${__dirname}/public`))

const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRoutes')

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

app.all('*', (req, res, next) => { next(new AppError(`Can't find ${req.originalUrl} on server!!`, 404));})
app.use(globalErrorHandler);

module.exports = app;
