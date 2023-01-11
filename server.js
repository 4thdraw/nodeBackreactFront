const express = require('express'); // 서버기능구현을 위한 core 모듈 express 호출
const path = require('path'); // 경로기능제어하기 위해서 모듈 호출
const cors = require('cors'); // 다른 서버와 연동호출
const app = express(); 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/contact');

app.use(cors()); 
//localhost:3000만 허용해주게끔 수정해주세요!!!

app.use('/', indexRouter);

app.use('/reactProxy', usersRouter);


app.listen(8080, ()=>{
  console.log('server is running on 8080')
})
