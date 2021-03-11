import React from 'react';
import bgheader from '../../images/bgheader2.jpg'
import logo from '../../images/logo1.png'
import './TeamDetails.css'
import maleImage from'../../images/male.png'


import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';


const TeamDetails = () => {
    return (
        <div className='container-fluid main-container'>
        
          <div className='container bg-header' style={{ backgroundImage: `url(${bgheader})` }}>
            <img src={logo} alt=""/>
          </div>
  
          <div className='container team-container'>
          <div className='team-info'>
              <div className='team-bullets'>
                <h3>FC Barcelona</h3>
                <p>Founded: November 29, 1899</p>
                <p>Country: Spain</p>
                <p>Sport Type: Football</p>
                <p>Gender: Male</p>
              </div>
              <div className='team-image'>
                <img src={maleImage} alt=""/>
              </div>

          </div>

          <div className='team-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a pariatur veniam repudiandae totam illo facere reiciendis, deleniti praesentium molestias quis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a pariatur veniam repudiandae totam illo facere reiciendis, deleniti praesentium molestias quis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a pariatur veniam repudiandae totam illo facere reiciendis, deleniti praesentium molestias quis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a pariatur veniam repudiandae totam illo facere reiciendis, deleniti praesentium molestias quis eaque.   </p>
          </div>
          <div className='social-container'>
            <a href="https://www.twitter.com"><FaTwitter color="#00acee" /></a> <a href="https://www.facebook.com"><FaFacebook color="#4267B2"/></a> <a href="https://www.youtube.com"><FaYoutube color="#FF0000"/></a>
             
          </div>              
          </div>
          
        </div>
    );
};

export default TeamDetails;