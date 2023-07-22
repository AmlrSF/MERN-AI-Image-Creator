const express = require('express');
const router = express.Router();
const {getImage} = require('../controllers/images');

router.route('/').post(getImage);
  
module.exports = router;