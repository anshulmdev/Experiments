const mongoose = require('mongoose');
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

module.exports = Tour;