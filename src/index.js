import './index.css';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login';
import Filme from './pages/Filme/Filme.js';
import CadastroUser from './pages/CadastroUser/CadastroUser';
import ViewUser from './pages/ViewUser/ViewUSer';
import Assistidos from './pages/Assistidos/Assistidos'


axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  config=>{
      config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/filme/:id" element={<Filme/>}/>
        <Route path='/cadastrouser' element={<CadastroUser/>}/>
        <Route path='/perfil' element={<ViewUser/>}/>
        <Route path='/minhalista' element={<Assistidos/>}/>
      </Routes>
    </BrowserRouter> 
    <Footer/>   
  </React.StrictMode>,
  document.getElementById('root')
);

