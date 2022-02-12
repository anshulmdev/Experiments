const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({'path':'./config.env'})
const DB = process.env.DATABASE || 'Invalid Connection String';

mongoose.connect(DB).catch((err) => {console.log('Error occured :', err.message)});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});

process.on('unhandledRejection', err =>{
  console.log(err.name, err.message);
})