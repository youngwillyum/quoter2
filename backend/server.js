const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const profileRoutes = express.Router();
const PORT = 8080;

let Profile = require('./profile.model');
const profileModel = require('./profile.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/profile', profileRoutes);

profileRoutes.route('/').get(function(req, res) {
    Profile.find(function(err, profile) {
        if (err) {
            console.log(err);
        } else {
            res.json(profile);
        }
    });
});
profileRoutes.route('/update/:id').get(function(req, res) {
    let id = req.params.id;
    Profile.findById(id, function(err, profile) {
        res.json(profile);
    });
});

profileRoutes.route('/add').post(function(req, res) {
    let profile = new Profile(req.body);
    profile.save()
        .then(profile => {
            res.status(200).json({'profle': 'profile added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new profile failed');
        });
});


app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});




app.listen(PORT, () => console.log('Server is running on Port:' + PORT));
