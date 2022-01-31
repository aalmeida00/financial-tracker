import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

// setup theme later

ReactDOM.render(
  <ChakraProvider resetCSS>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  ,
  document.getElementById('root')
);
