import React from 'react';
import Teams from '../Teams/Teams';
import bgheader1 from '../../images/bgheader1.jpg'
import logo from '../../images/logo.png'
import './Home.css'

const Home = () => {
    return (
      
        <div className='container-fluid main-container'>
        <div>
          <div className='container bg-header' style={{ backgroundImage: `url(${bgheader1})` }}>
            <img src={logo} alt=""/>
  
          </div>
  
          <div className='container component-container'>
            <Teams/>
            
          </div>
        </div>
  
        
        
  
  
      </div>
    );
};

export default Home;