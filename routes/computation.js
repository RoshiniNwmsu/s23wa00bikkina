var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let a=Math.fround(x);
    let b=Math.random(x);
    let c=Math.round(x);
    
  res.render('computation', { x:x,fround:a, random:b, round:c});
});

module.exports = router;
