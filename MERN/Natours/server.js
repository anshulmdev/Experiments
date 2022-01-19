const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({'path':'./config.env'})
const DB = process.env.DATABASE;

mongoose.connect(DB).then(connection => { console.log(connection.connections)});

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

const Tour = moongoose.model('Tour', tourSchema);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});