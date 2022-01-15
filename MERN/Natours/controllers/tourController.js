const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


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
      res.send(201).json(
        {"status":"success", data:{tour:newTour}})
    })
  }
  
exports.getTour = (req, res) => {
    const tour = tours.find((e) => e.id === req.params.id * 1)
    if(req.params.id * 1 < tours.length){
    res.status(200).json({
      "status":"success",
      "data": tour
    })} else{
      res.status(404).json({"status":"failed"})
    }
  }
  
exports.updateTour = (req, res) => {
    if(req.params.id * 1 > tours.length) {
      res.send(404).json({"status":"failed"})
    }
    res.status(200).json({"status":"Tour Patched"})
  }
  
exports.deleteTour = (req, res) => {
    if(req.params.id * 1 > tours.length) {
      res.send(404).json({"status":"failed"})
    }
    res.status(200).json({"status":"Tour Deleted"})
  }