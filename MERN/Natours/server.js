const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({'path':'./config.env'})
const DB = process.env.DATABASE;

mongoose.connect(DB).then(connection => { console.log(connection.connections)});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port - ${port}`);
});