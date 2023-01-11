var express = require('express');
var router = express.Router();


/* GET home page. 
  리액트 접근 주소
  localhost:8080/reactProxy
  localhost:8080/reactProxy/write
  localhost:8080/reactProxy/list
*/

router.post('/', (req, res) => {
    //리액트 폼태그에서 DB전송받아서 서버에서 저장해준다.
    //그래야 리액트가 글 읽기에서 볼수가 있겠지.
    res.send('localhost:8080/reactProxy/write로 리액트가 요청에 대한 성공여부결과 true/false')

});

module.exports = router;