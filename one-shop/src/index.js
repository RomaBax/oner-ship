import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from './components/headers/headers';
import Footers from './components/footers/futers';
import {ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom'
import Main from './components/mains/main';
import SearchCatalog from './components/mains/searchCatalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <Headers />
        <SearchCatalog/>
        <Footers />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
