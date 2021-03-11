import React from 'react';
import { useEffect, useState } from "react";
import Teams from '../Teams/Teams';
import bgheader1 from '../../images/bgheader1.jpg'
import logo from '../../images/logo.png'
import './Home.css'






const Home = () => {

  const [teams, setTeams] = useState([]);
    
  useEffect( () => {
      async function fetchData(){
      const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
      const res = await fetch(url);
      const data = await res.json();
      setTeams(data.teams)

      }
      fetchData();
      return () => {};

    }, []);

      // const testType = typeof(teams)
      // console.log(testType);
      // console.log(teams);
     

    return (
      
        <div className='container-fluid main-container'>
        <div>
          <div className='container bg-header-1' style={{backgroundImage: `url(${bgheader1})`}}>
            <img src={logo} alt=""/>
  
          </div>
  
          <div className='container component-container'>
            <div className='row row-cols-3'>
            {
              teams.map((team, index) => <Teams key = {index} team={team} ></Teams>  )
              
            }
            </div>
          </div>
        </div>
  
        
        
  
  
      </div>
    );
};

export default Home;