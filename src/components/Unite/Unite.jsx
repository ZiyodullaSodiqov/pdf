import React from 'react';
import Form from '../Form/Form';
import './Unite.css';
import { UniteS } from '../Data';
import Footer from '../Footer/Footer';


const Unite = () => {
  return (
    <div className='unite'>
       <h1>{UniteS.text}</h1>
       <p>{UniteS.title}</p>
       <Form btns = {UniteS.btnName}/>
       <span>{UniteS.info}</span>
       <Footer />
    </div>
  )
}

export default Unite;