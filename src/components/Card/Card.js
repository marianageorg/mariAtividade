import React, { useEffect } from 'react';
import axios from 'axios';


function Card(props) {
  const pegarNoticias=()=>{
    axios.get('http://localhost:8000/news')
    .then(response => props.setNew(response.data))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    pegarNoticias()
  },[])

  const novasNoticias = props.news.map((item)=>{
    return(
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
    )
  })

  return (
    <>
    {novasNoticias}
    </>
  );
}

export default Card;