var express = require('express');
var router = express.Router();

/* GET home page. 
  localhost:8080/reactProxy
*/

/*
  프론트앤드 리액트에서 $.ajax({ url : "localhost:8080/contact", type :"POST" })

*/
router.get('/', function(req, res, next) {
  res.send({ title: 'Get요청에 응답하는 노드서버' });
});
router.post('/', function(req, res, next) {
    res.send({ title: 'Express' });
});

module.exports = router;