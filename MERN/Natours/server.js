const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({'path':'./config.env'})
const DB = process.env.DATABASE;

mongoose.connect(DB);

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price:{
    type: Number,
    required: [true, 'Price is mandatory']
  }
})

const Tour = mongoose.model('Tour', tourSchema);
const testTour = new Tour({
  name: 'Sample 2',
  price: 22,
  rating: 2.0
})

testTour.save().then(e => {
  console.log(e)
}).catch(e => {
  console.log('error',e)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});