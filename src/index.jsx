import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Router, Routes}from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Relatorio from './Relatorio';

const rootElement = document.getElementById('root');

render(
  // <React.StrictMode>
    <BrowserRouter>
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<App/>} exact />
        <Route path='/relatorio' element={<Relatorio/>} exact />
      </Routes>
    {/* </Router> */}
    </BrowserRouter>,
  // </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
