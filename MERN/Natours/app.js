const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

const getAllTours = (req, res) => {
  res.status(200).json({
    "status":"success",
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

app.get('/api/v1/tours', getAllTours)
app.get('/api/v1/tours/:id', getTour)
app.post('/api/v1/tours', createTour)
app.patch('/api/v1/tours/:id', updateTour)
app.delete('/api/v1/tours/:id', deleteTour)



const port = 3000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});

