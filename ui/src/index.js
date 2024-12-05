import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import ServerManage from './pages/serverManage/ServerManage';

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/serverManage' element={<ServerManage />} />
      <Route path='/' element={<Login />} />
    </Routes>
  </BrowserRouter>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);