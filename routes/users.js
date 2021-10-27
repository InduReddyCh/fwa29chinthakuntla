var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var a=0;
  res.send(`User accesses are: ${a}`);
  a++;
});

module.exports = router;
