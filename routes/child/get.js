var express = require('express');
var router = express.Router();


/* GET home page. 
  리액트 접근 주소
  localhost:8080/reactProxy 
  localhost:8080/reactProxy/list
*/

router.get('/', (req, res) => {
    res.send({
            notice :[ {
                subject : "공지사항0",
                content : "글에 대한 제목입니다."
            },
            {
                subject : "공지사항1",
                content : "글에 대한 제목입니다."
            },
            {
                subject : "공지사항2",
                content : "글에 대한 제목입니다."
            }
        ]
    })

});


module.exports = router;