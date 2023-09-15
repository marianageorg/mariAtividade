import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';



function Home(props) {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
        navigate('/')
        }
    
      }, [navigate])
    
      const handleLogOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
      }

  return (
    <>
    <Card news={props.news}
    setNews={props.setNews} />
    <button onClick={handleLogOut}>LogOut</button>
    </>

  );
}

export default Home;