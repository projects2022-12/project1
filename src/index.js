import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './style/Style.css';
import Register from './components/Register';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <Routes>
        <Route exact path='/' element={<App/>} />
        <Route path='/register' element={<Register/>} />
     </Routes>
  </Router>
);
