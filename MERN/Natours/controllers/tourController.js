const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


exports.checkId =(req, res, next, val) => {
  console.log('Value', val)
  if(req.params.id * 1 > tours.length) {
    return res.status(404).json({"status":"failed", "message": "Invalid ID"})
  }
  next();
}

exports.checkBody = (req, res, next) => {
  console.log('Triggered')
  const {name, price} = req.body;
  if (!name || !price) {
    return res.status(400).json({"status":"failed", "message":"Parameters missing from body"})
  }
  next();
}

exports.getAllTours = (req, res) => {
    res.status(200).json({
      "status":"success",
      "requestTime": req.requestTime,
      "results": tours.length,
      "data": {tours}
    })
  }
  
exports.createTour = (req, res) => {
    const newid = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newid}, req.body)
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
      res.status(201).json(
        {"status":"success", data:{tour:newTour}})
    })
  }
  
exports.getTour = (req, res) => {
    const tour = tours.find((e) => e.id === req.params.id * 1)
    res.status(200).json({
      "status":"success",
      "data": tour
    })
  }
  
exports.updateTour = (req, res) => {
    res.status(200).json({"status":"Tour Patched"})
  }
  
exports.deleteTour = (req, res) => {
    res.status(200).json({"status":"Tour Deleted"})
  }