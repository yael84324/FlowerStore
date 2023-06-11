import Router from './components/Router'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {BasketProvider} from './components/BasketContext';
import { ImageProvider } from './components/ImageContext';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ImageProvider>
    <BasketProvider>
      <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <Router />
      )}
      </BrowserRouter>
    </BasketProvider>
    </ImageProvider>
  );
}

export default App;
