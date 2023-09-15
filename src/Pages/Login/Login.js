import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // Inicializa dois estados para armazenar o email e a senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        // Importa a função de roteamento do React Router
        const navigate = useNavigate();
    
        const goToHome = () =>{
          navigate('/home')
        }

        const saveUserInfoLocalStorage = (token) => {
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)


        }
      
  
    // Função que lida com o envio do formulário
    const handleSubmit = (e) => {
      e.preventDefault()

      const credentials = {email, password}
  
      axios.post('http://localhost:8000/login', credentials,{
        headers:{
          'Content-Type': 'application/json',
        },
  
      })
      .then(response =>{
        alert(response.data.message)
        saveUserInfoLocalStorage(response.data.token)
        goToHome()
      })
      .catch(error => console.log(error))
    };
  

  return (
    <>
          <p>Insira suas informações de login </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder='nome@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {/* Botão para entrar */}
              <button type='submit'>Entrar</button>
            </div>
          </form>
          </>
  );
};

export default Login;