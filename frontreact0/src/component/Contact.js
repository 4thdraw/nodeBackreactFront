import React, {useEffect, useState } from 'react';
import axios from 'axios';

function Contact(props) { 
    const [nodeData, dataUpdate] = useState({});
    
    useEffect(() => {
        axios
          .get("http://localhost:8080/reactProxy/list")
          .then((response) => {           
              const noticeDb ={...response.data};            
              dataUpdate(noticeDb);
           console.log(noticeDb, typeof noticeDb);
          });
      }, []); //반드시 한번만 하도록 한다... 랜더링지옥에 빠지게된다.
    
    return (
        <div>
            {
              nodeData.notice.map((item, index)=>{
                return(
                  <li key={'notice'+index} >
                    <p>
                      {item.subject}
                    </p>
                    <div>
                      {item.content}
                    </div>
                  </li>
                )
              })
            }
        </div>
    );
}

export default Contact;