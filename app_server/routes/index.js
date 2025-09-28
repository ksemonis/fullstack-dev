var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET travel page. */
router.get('/', ctrlMain.travel);

module.exports = router;
