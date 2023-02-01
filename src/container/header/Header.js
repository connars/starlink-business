import { Link, NavLink } from 'react-router-dom';
import './header.css';
import { useState, useEffect, useRef } from "react";
import logo from '../../assets/images/logo-white.png'

function Header() {

     
    const menu = useRef('');
    // const [toggle, setToggle] = useState(false);
  
    const showMenu = () => {
    //   setToggle(!toggle)
      if(menu.current.classList.contains('active')) {
        menu.current.classList.remove('active');
      }else {
        menu.current.classList.add('active');
      }
    }
 
    
   
    return (
        <div id='header' className='header'>
            <header className="header__wrapper">
                <div id="header-wrapper" className="header__wrapper">
                    <Link to="/" className="header__logo" href="">
                        <img width="18" height="46" src={logo} alt="" />
                    </Link>
                    <ul  ref={menu} className="header__navbar" >
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link open-dropdown hoverable" href="#">
                                EHOSS ECOSYSTEM
                            </Link>
                            <div className="header__nav-drop">
                                <div className="header__mini__list-wrapper">
                                    <h3 className="header__mini-heading">
                                        <Link className="header__mini__heading-link hoverable" href="#">
                                            Інженерні платформи
                                        </Link>
                                    </h3>
                                </div>
                                <div className="header__mini__list-wrapper">
                                    <h3 className="header__mini-heading">
                                        <Link className="header__mini__heading-link" href="#">
                                            Хмарні платформи
                                        </Link>
                                    </h3>
                                </div>
                                <div className="header__mini__list-wrapper">
                                    <h3 className="header__mini-heading">
                                        <Link className="header__mini__heading-link" href="#">
                                            Окремі продукти
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EHOSS NETWORK
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EQUINE DIRECTORY
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EHOSS SUPPORT
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EHOSS LIFE
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EHOSS COMPANY
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EQUINE WIKI
                            </Link>
                        </li>
                        <li className="header__navbar-item">
                            <Link className="header__navbar-link" href="#">
                                EQUINE LIVE
                            </Link>
                        </li>
                    </ul>

                    <button onClick={showMenu} className="header__menu-btn">
                        <span className="header__menu-line1 header__menu-line"></span>
                        <span className="header__menu-line3 header__menu-line"></span>
                    </button>
                </div>
            </header>
            </div>

      
    )
}

export default Header;