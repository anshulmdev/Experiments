const express = require('express');
const morgan = require('morgan');
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

module.exports = app;
