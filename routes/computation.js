var express = require('express');
var router = express.Router();
var a=8;
/* GET users listing. */
router.get('/', function(req, res, next) {
  b=Math.fround(a)
  c=Math.random(a)
  d=Math.round(a)
  res.send(`[Math.fround()] applied to ${a} is ${b}\n [Math.random()] applied to ${a} is ${c}\n [Math.random()] applied to ${a} is ${d}`)
  
  //res.send(`User accesses are: ${a}`);
  
});

module.exports = router;
