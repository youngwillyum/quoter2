const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const profileRoutes = express.Router();
const PORT = 8080;


app.use(cors());
app.use(bodyParser.json());
app.use('/profile', profileRoutes);

profileRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, profile) {
        if (err) {
            console.log(err);
        } else {
            res.json(profile);
        }
    });
});


app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});




app.listen(PORT, () => console.log('Server is running on Port:' + PORT));
