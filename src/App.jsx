import React, { useState } from 'react';
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Events from './pages/events/Events';
import Footer from './Footer';
import './App.css';
export default function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [toggle, setToggle] = useState(false);
  const [btnChar, setBtnChar] = useState('☰');
  const handleClick = (page) => {
    setToggle(!toggle);
    btnChar === '☰' ? setBtnChar('X') : setBtnChar('☰');
    if (page !== '') {
      setCurrentPage(page);
      setBtnChar('☰');
    }
  };
  return (
    <>
      <header id="headernav">
        <button onClick={() => handleClick('')}>
          {btnChar}
        </button>
      </header>
      <nav id="menunavbar" className={toggle ? 'visible' : ''}>
        <section id="images">
        <img src="./PCCOEnobg.png" alt='pccoenobg'/>
        <img src="./AIMSAnobg.png" alt='aimsanobg'/>
        </section>
        <button onClick={() => handleClick('HOME')}>
          HOME
        </button>
        <button onClick={() => handleClick('TEAM')}>
          TEAM
        </button>
        <button onClick={() => handleClick('EVENTS')}>
          EVENTS
        </button>
      </nav>
      <section id="main">
        {currentPage === 'HOME' ? <Home /> :
          currentPage === 'TEAM' ? <Team /> :
            currentPage === 'EVENTS' ? <Events /> : null
        }
      </section>
      <Footer />
    </>
  )
}
