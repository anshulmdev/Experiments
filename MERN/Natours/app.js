const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    'data': 'Sample data',
    'id': 122
  });
})


app.listen(port, () => {
  console.log('Running on port - 2000');
});

