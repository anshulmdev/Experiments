const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({'path':'./config.env'})
const DB = process.env.DATABASEff || 'Invalid Connection String';

mongoose.connect(DB);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('Unhandled error: Shutting Down')
  process.exit(1);
})