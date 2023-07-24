import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-11 bg-cyan-600 py-5 '>
       
      <div className='w-full h-1 bg-orange-600'></div>
  
            <footer className="footer p-10 text-base-content">
  <div>
    <img className='w-1/3' src="" alt="" />
    <p className='text-white'>Book My College<br/>
    <br />Copyright © 2023 Book My College. All rights reserved.</p>
  </div> 
  <div className='text-white'>
    <span className="text-black font-bold">Sub-category</span> 
    
    <span className="">ABC College</span> 
    <span className="">XYZ College</span> 
    <span className="">EFG College</span> 
    <span className="">PQR College</span> 
    <span className="">LMN College</span> 
    <span className="">UVW College</span> 
    
  </div> 
  <div className='text-white'>
    <span className="text-black font-bold text-center">About</span>
    <span className="">Phone:0174000000</span> 
    <span className="">Email:rabby@gmail.com</span>  
 
  </div> 
  
</footer>
        </div>
    );
};

export default Footer;