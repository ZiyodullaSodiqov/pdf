import { Link } from 'react-router-dom';
import Logo from '../../imgs/png/logo.svg';
import './Navbar.css';
import { nav } from '../Data';
import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(0)
  const toggle = (index) => {
    setActive(index)
  }
  return (
    <nav className='navbar'>
        <div className="navbar-item">
           <Link onClick={() => toggle(setActive === 0)} 
           className='logo' to="/">
              <img src={Logo} alt="Logo" />
           </Link>

           <ul className='navbar-menu'>
              {
                nav.map((navs, index) => {
                  return <li key={index}>
                  <Link onClick={() => toggle(index)} 
                  className={active === index ? "link active" : "link"}  
                  to={navs.to}>{navs.name}</Link>
                </li>
                })
              }
              <li>
                <Link onClick={() => toggle(setActive === 0)}
                 className='link'>КОНВЕРТИРОВАТЬ PDF <i 
                 className="fa-sharp fa-solid fa-caret-down">
                  </i></Link>
              </li>
              <li>
                <Link onClick={() => toggle(setActive === 0)} 
                className='link'><span>ВСЕ ИНСТРУМЕНТЫ PDF</span>
                <i className="fa-sharp fa-solid fa-caret-down"></i> 
                <i className="fa-solid fa-wrench">
                </i>
                </Link>
              </li>
           </ul>
        </div>

        <div className="navbar-right">
          <Link to="/logIn" onClick={() => toggle(setActive === 0)}  className='come-btn'>
            Войти
          </Link>
          <Link to="/loginn" onClick={()=>toggle(setActive ===0)} className='sign-btn'>
             <span>Регистрация </span> 
             <i className='fa-solid fa-user'></i>
          </Link>
          <div className="menu-btn">
            <div className="menu-btn__btn"></div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;