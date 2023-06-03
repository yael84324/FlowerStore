import Router from './components/Router'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {BasketProvider} from './components/BasketContext';
import { ImageProvider } from './components/ImageContext';

function App() {
  return (
    <ImageProvider>
    <BasketProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </BasketProvider>
    </ImageProvider>
  );
}

export default App;
