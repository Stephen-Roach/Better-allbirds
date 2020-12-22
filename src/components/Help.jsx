import React from 'react';
import './Help.css';

function Help() {
  return (
    <div className='help'>
      <div className='help__info'>
        <h1>How Can we Help?</h1>
        <p>Send us a text: 1-814-251-9966</p>
        <p>Give us a call: 1-888-963-8944</p>
        <p>Monday - Friday 9AM - 5PM PST</p>
        <button className='help__infoButton'>Get In Touch</button>
      </div>
    </div>
  );
}

export default Help;
