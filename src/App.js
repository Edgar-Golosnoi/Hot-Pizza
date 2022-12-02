/* eslint-disable react/jsx-key */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
// import Cart from './pages/Cart';

import './scss/app.scss';


function App() {
  const [serchValue, setSerchValue] = React.useState('');



  return (
    <div className="wrapper">
  <Header serchValue={serchValue} setSerchValue={setSerchValue}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
  );
}
 // <Route path="/cart" element={<Cart/>} />

export default App;
