var express = require('express');
var router = express.Router();

const writejs = require('./child/post');
const listjs = require('./child/get');

/* GET home page. 
  리액트 접근 주소
  localhost:8080/reactProxy
  localhost:8080/reactProxy/write
  localhost:8080/reactProxy/list
*/

router.use('/list', listjs);
router.use('/write', writejs);

module.exports = router;