const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;


app.use(cors());
app.use(bodyParser.json());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.use('/profile', (req, res) => {
  res.send({
    token: 'profile123'
  });
});


app.listen(PORT, () => console.log('API is running on http://localhost:8080/login'));
