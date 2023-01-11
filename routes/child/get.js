var express = require('express');
const noticejson = require('../../json/notice')
var router = express.Router();

/* GET home page. 
  리액트 접근 주소
  localhost:8080/reactProxy 
  localhost:8080/reactProxy/list
*/
router.get('/', (req, res) => {
    console.log(noticejson, typeof noticejson);
    res.send(noticejson)
});


module.exports = router;