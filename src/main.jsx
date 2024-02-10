import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './css/vendor.css'
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GlobalProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalProvider>
  </BrowserRouter>,
)
