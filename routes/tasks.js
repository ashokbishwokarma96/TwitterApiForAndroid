const express = require('express');
const Task = require('../models/tasks');
const auth = require('../auth');

const router = express.Router();
router.get('/me', auth.verifyUser, (req, res, next) => {
    res.json({ _id: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName, username: req.user.username, image: req.user.image });
    
});
module.exports = router;