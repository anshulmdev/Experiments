const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();
app.use(express.json());

const middleware = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
}
app.use(morgan('dev'))
app.use(middleware);

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));


const getAllTours = (req, res) => {
  res.status(200).json({
    "status":"success",
    "requestTime": req.requestTime,
    "results": tours.length,
    "data": {tours}
  })
}

const createTour = (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({id: newid}, req.body)
  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.send(201).json(
      {"status":"success", data:{tour:newTour}})
  })
}

const getTour = (req, res) => {
  const tour = tours.find((e) => e.id === req.params.id * 1)
  if(req.params.id * 1 < tours.length){
  res.status(200).json({
    "status":"success",
    "data": tour
  })} else{
    res.status(404).json({"status":"failed"})
  }
}

const updateTour = (req, res) => {
  if(req.params.id * 1 > tours.length) {
    res.send(404).json({"status":"failed"})
  }
  res.status(200).json({"status":"Tour Patched"})
}

const deleteTour = (req, res) => {
  if(req.params.id * 1 > tours.length) {
    res.send(404).json({"status":"failed"})
  }
  res.status(200).json({"status":"Tour Deleted"})
}

const getAllUsers = (req, res) => {
  res.status(500).json({"status":"Get All Users Endpoint: Not Completed"})
}

const createUser = (req, res) => {
  res.status(500).json({"status":"Create Endpoint: Not Completed"})
}

const getUser = (req, res) => {
  res.status(500).json({"status":"Get Endpoint: Not Completed"})
}

const updateUser = (req, res) => {
  res.status(500).json({"status":"Update Endpoint: Not Completed"})
}

const deleteUser = (req, res) => {
  res.status(500).json({"status":"Delete Endpoint: Not Completed"})
}

const tourRouter = express.Router()
const userRouter = express.Router()

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

tourRouter.route('/').get(getAllTours).post(createUser);
tourRouter.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createTour);
userRouter.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});

