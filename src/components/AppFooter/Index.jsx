import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function AppFooter() {
  return (
    <div className='AppFooter' style={{ marginTop: 'auto', backgroundColor: '#EAF2F8', padding: '16px' }}>
      <div className='flex space-x-4'>
        <a href='https://twitter.com/Dmonier87' target='_blank' rel='noopener noreferrer' style={{ margin: '0 5px' }}>
          <FaTwitter className='cursor-pointer' size={20} color='black' />
        </a>
        <a href='https://github.com/monier87' target='_blank' rel='noopener noreferrer' style={{ margin: '0 5px' }}>
          <FaGithub className='cursor-pointer' size={20} color='black' />
        </a>
        <a href='https://instagram.com/carlosdavid1905' target='_blank' rel='noopener noreferrer' style={{ margin: '0 5px' }}>
          <FaInstagram className='cursor-pointer' size={20} color='black' />
        </a>
        <a href='https://linkedin.com/in/carlos-monier-712948185' target='_blank' rel='noopener noreferrer' style={{ margin: '0 5px' }}>
          <FaLinkedinIn className='cursor-pointer' size={20} color='black' />
        </a>
      </div>
    </div>
  );
}

export default AppFooter;

