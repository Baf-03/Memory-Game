import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='w-[100%] h-[90vh] flex items-center'>
       <Link to='/game'><button class='glowing-btn'><span class='glowing-txt'>LE<span class='faulty-letter'>T's</span> PLAY</span></button></Link> 
    </div>
  )
}

export default Homepage