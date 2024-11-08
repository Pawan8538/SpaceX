import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import spaceX from'./spaceX.svg';



function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [transparent, setTransparent] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setVisible(false);
        setTransparent(false);
      }
       else {
        // Scrolling up
        setVisible(true);
        setTransparent(currentScroll === 0);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);


  return (
    <>
      <header>
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}  ${transparent ? 'transparent' : 'solid'}`}>
          <div className="navbar-container">
            <div className="left-section">
              <div className="logo">
                <nav> <img className='logo' src={spaceX} alt="Logo" width={100} height="auto" /> </nav>
              </div>
            </div>

            <div className='nav-center'>
              <ul className={`nav-collection ${isOpen ? 'open' : ''} ${visible ? 'visible' : 'hidden'}`}>
                <li> <Link to='' className='nav-item'>FALCON9 </Link> </li>
                <li> <Link to='' className='nav-item'>FALCON HEAVY </Link> </li>
                <li> <Link to='' className='nav-item'>DRAGON </Link> </li>
                <li> <Link to='' className='nav-item'>STARSHIP </Link> </li>
                <li> <Link to='' className='nav-item'>HUMAN SPACEFLIGHT </Link> </li>
                <li> <Link to='' className='nav-item'>RIDESHARE </Link> </li>
                <li> <Link to='' className='nav-item'>STARSHIELD </Link> </li>
                <li> <Link to='' className='nav-item'>STARLINK </Link> </li>
                <li> <Link to='' className='nav-item'>SHOP </Link> </li>
              </ul>

            </div>

            <div className="right-section">
              <div className={`menu-container ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-icon" onClick={toggleMenu}>
                  <div className={`bar1 ${isOpen ? 'open' : ''}`}></div>
                  <div className={`bar2 ${isOpen ? 'open' : ''}`}></div>
                  <div className={`bar3 ${isOpen ? 'open' : ''}`}></div>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''} ${visible ? 'visible' : 'hidden'}`}>
                  <ul className="menu-list">
                    <li><Link to="/" onClick={toggleMenu}>MISSION</Link></li>
                    <li><Link to="/" onClick={toggleMenu}>LAUNCHES</Link></li>
                    <li><Link to="/" onClick={toggleMenu}>CAREERS</Link></li>
                    <li><Link to="/" onClick={toggleMenu}>UPDATES</Link></li>
                    <li><Link to="/" onClick={toggleMenu}>SHOP</Link></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

        </nav>
      </header>



      <div className='body'>

        <div className='s1'>
          <div className='info'><p className='para'>RECENT LAUNCH</p>
            <h2>STARLINK MISSION</h2>
            <button className='info-btn'>REWATCH</button></div>
        </div>

        <div className='s2' role='img'>
          <div className='info'>
            <h2>ADVANCING HUMAN SPACEFLIGHT</h2>
            <button className='info-btn learn'>LEARN MORE</button></div>
        </div>

        <div className='s3' role='img'> 
          <div className='info'>
            <h2>TO MAKE LIFE MULTIPLANETARY</h2>
            <button className='info-btn more'>LEARN MORE</button></div>
        </div>

        <div className='s4' role='img'>  
          <div className='info'><p className='para'> LAUNCH</p>
            <h2>SPACEX MISSION</h2>
            <button className='info-btn'>REWATCH</button></div>
        </div>


        <div className='nav-bottom'>
          <ul className='bottom-collection'>
            <li className='bottom-text'>SPACEX CLONE</li>
            <li className='bottom-text'>PRIVACY POLICY</li>
            <li className='bottom-text'>SUPPLIERS</li>
          </ul>
        </div>


      </div>

    </>
  );
}

export default Navbar;


