import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Rotas from './Rotas/Rotas';
import { useState } from 'react';


function App() {
  const [news, setNews] = useState([])


  return (
    <>
    <ChakraProvider>
      <Rotas news={news} setNews={setNews}/> 
    </ChakraProvider>

    </>
  );
}

export default App;
