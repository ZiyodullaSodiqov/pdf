import React from 'react';
import Form from '../Form/Form';
import { Divides } from '../Data';
import './Divide.css';
import Footer from '../Footer/Footer';

const Divide = () => {
  return (
    <div className='divide'>
       <h1>{Divides.text}</h1>
       <p>{Divides.title}</p>
       <Form btns = {Divides.btnName}/>
       <span>{Divides.info}</span>
       <Footer/>
    </div>
  )
}

export default Divide
