import React, {useEffect, useState } from 'react';
import axios from 'axios';

// axios를 사용해서 GET, PUT, POST, DELETE 등의 메서드로 API 요청이 가능합니다. 
// GET: 데이터 조회
// POST: 데이터 등록
// PUT: 데이터 수정
// DELETE: 데이터 제거
function Contact(props) { 
    const [nodeData, dataUpdate] = useState('초기값');
    
    useEffect(() => {
        axios
          .get("http://localhost:8080/reactProxy")
          .then((response) => {
            dataUpdate(response.data.title);
          });
      }, [nodeData]);

    
    return (
        <div>
            {nodeData}
        </div>
    );
}

export default Contact;