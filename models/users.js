const express = require('express');
const router = express.Router();
const model = require('../base/Model');
var url = require('url');

const table = "users";

// @route GET api/users
// @description gets all users
// @access public 

router.get('/', (req, res) => {
    model.findall(table, (err, data) => {
        if (err) {
            console.log("An Error Occurred");
            return;
        } else {
            res.json(data);
        };
    });
});

// @route GET api/users
// @description gets individual users
// @access public 

router.get('/:id', (req, res) => {
    var id = req.params.id;
    model.findbyid(table, id, (err, data) => {
        if (err) {
            res.json({
                msg: "Unknown Error"
            });
        } else {
            res.json(data);
        };
    });
});

module.exports = router;