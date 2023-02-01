import { Link, NavLink } from 'react-router-dom';
import './header.css';
import { useState, useEffect, useRef } from "react";
import logo from '../../assets/images/logo-white.png'

function Header() {


    
    let menu = useRef('');

    const showMenu = () => {
      if(menu.current.classList.contains('active')) {
        menu.current.classList.remove('active');
      }else {
        menu.current.classList.add('active');
      }
    }


    useEffect(() => {
        let links = document.querySelectorAll('.header__navbar-link');
    
        links.forEach(link => {
            link.addEventListener('click', showMenu)
            console.log(link)
        });
    });

 

   
 
    
   
    return (
        <div id='header' className='header'>
            <header className="header__wrapper">
                <div id="header-wrapper" className="header__container container">
                    <Link to="/" className="header__logo" href="">
                        <span className='logo__one'>STARLINK</span> BUSINESS
                    </Link>
                    <ul ref={menu} className="header__navbar" >
                        <li className="header__navbar-item">
                            <Link to="/" className="header__navbar-link">
                                HOME
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link to="/billing" className="header__navbar-link">
                                BILLING
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link to="/"className="header__navbar-link">
                                SUPPORT
                            </Link>
                        </li>
                    </ul>
                    <button onClick={showMenu} className="header__menu-btn">
                        <span className="header__menu-line1 header__menu-line"></span>
                        <span className="header__menu-line2 header__menu-line"></span>
                    </button>
                </div>
            </header>
            </div>

      
    )
}

export default Header;