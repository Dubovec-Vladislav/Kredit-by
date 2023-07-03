import React, { useState } from 'react'
import style from './app.module.scss'
import Popup from './assets/Components/General/Popup/Popup'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Main from './assets/Components/Main/Main'
import CustomerRequests from './assets/Components/CustomerRequests/CustomerRequests'

function App() {
  const [isPopupActive, setPopupActive] = useState(false);

  const handlePopupClick = () => {
    setPopupActive(!isPopupActive);
    document.body.classList.toggle('_lock');
  }

  return (
    <div className={style.wrapper}>
      <Popup isPopupActive={isPopupActive} handlePopupClick={handlePopupClick} />
      <Header handlePopupClick={handlePopupClick} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/legal-entities" element={<CustomerRequests id={1}/>} />
        <Route path="/individual-entrepreneurs" element={<CustomerRequests id={1}/>} />
        <Route path="/commercial-banks" element={<CustomerRequests id={3}/>} />
        <Route path="/other-users" element={<CustomerRequests id={4}/>} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
