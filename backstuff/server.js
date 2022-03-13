const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const histRoutes = express.Router();
const PORT = 4000;

let History = require('./history.model');
const historyModel = require('./history.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/historys', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

histRoutes.route('/').get(function(req, res) {
    History.find(function(err, historys) {
        if (err) {
            console.log(err);
        } else {
            res.json(historys);
        }
    });
});

histRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    History.findById(id, function(err, history) {
        res.json(history);
    });
});

histRoutes.route('/update/:id').post(function(req, res) {
    History.findById(req.params.id, function(err, history) {
        if (!history)
            res.status(404).send("data is not found");
        else
            history.hist_date = req.body.hist_date;
            history.hist_gallons_requested = req.body.hist_gallons_requested;
            history.hist_price_per_gallon = req.body.hist_price_per_gallon;
            history.hist_total_cost = req.body.hist_total_cost;

            history.save().then(history => {
                res.json('History updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

histRoutes.route('/add').post(function(req, res) {
    let history = new History(req.body);
    history.save()
        .then(history => {
            res.status(200).json({'history': 'history added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new history failed');
        });
});

app.use('/historys', histRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
