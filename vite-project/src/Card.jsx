import React from 'react'
import profilePic from './assets/WIN_20250716_09_05_41_Pro.jpg'

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt='my image'></img>
      <h2 className='card-title' >Saran Anil V P</h2>
      <p className='card-text' >I am a Mern stack engineer</p>
    </div>
  );
};

export default Card
