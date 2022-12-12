import React from 'react';
import './logged.css';
import Logo from '../../imgs/png/logo.svg';
import Fa from '../../imgs/png/facb.svg';
import Go from '../../imgs/png/gog.svg';
import BgL from '../../imgs/png/loginpdf.png';

  function Logged() {
    return(
      <>
        <div className='logDiv'>
          <img 
            className='logImg' 
              src={Logo} alt="" />
          <h2 
            style={{transform: "translate(270px, 210px)" , color:"gray"}}>
            Создать учетную запись
          </h2>
          <div className='facebookDiv'>
            <img src={Fa} alt="" 
                style={{margin:"7px 10px"}} />
                <small style={{color:"#ffff" , transform:"translateY(8px)" , position:"absolute"}}>Регистрация с помощью Facebook </small>
          </div>
          <div className='googleDiv'>
          <img src={Go} alt="" 
                style={{margin:"5px 10px"}} />
                <small style={{color:"#000" , transform:"translateY(8px)" , position:"absolute"}}>Регистрация с помощью Google</small>
          </div>
          <form action="" method="post">
            <input type={'text'} placeholder={"Imya"} id='name'/>
            <input type={'email'} placeholder={"Email"} id='email'/>
            <input type={'password'} placeholder={"Password"} id='pass'/>
            <button type={'submit'} id='btn-submit'>Регистрация</button>
          </form>
          <p className='pId'>
            Вы уже зарегистрированы? <span style={{color:"#e5322d" , textDecoration:"underline",cursor:"pointer",fontWeight:"700"}}>Войти</span> <br /> При создании учетной записи, вы соглашаетесь с iLovePDF <span style={{color:"#e5322d"}}>Условиями предоставления услуг и  Политикой конфиденциальности</span>
          </p>
        </div>
        <div className='loggedDiv'>
          <img src={BgL} style={{transform:"translate(290px, 120px)"}} alt="" />
          <h1 
            style={{transform:"translate(-80px, 145px)" , display:"inline-block"}}>
              Log in to your workspace
            </h1>
            <p
              style={{display:"inline-block" , lineHeight:"25px" , transform:"translate(270px, 160px)" , color:"#383e45"}}>
            Enter your email and password to access your iLovePDF <br /> account. You are one step closer to boosting your document <br /> productivity.
            </p>
        </div>
      </>
    );
  }

export default Logged;