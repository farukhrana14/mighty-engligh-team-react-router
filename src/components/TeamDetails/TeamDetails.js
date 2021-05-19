import React, { useEffect, useState } from 'react';
import bgheader from '../../images/bgheader2.png'
import logo from '../../images/logo1.png'
import './TeamDetails.css'
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import imgFounded from '../../images/founded.png'
import imgCountry from '../../images/countryFlag.png'
import imgSport from '../../images/sportType.png'
import imgGender from '../../images/gender.png'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const TeamDetails = () => {
  const { idTeam } = useParams();


  const [teamDetail, setTeamDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
      const res = await fetch(url);
      const data = await res.json();
      setTeamDetail(data.teams[0])

    }
    fetchData();
    return () => { };

  }, [idTeam]);


  const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTeamBanner, strTwitter, strFacebook, strYoutube } = teamDetail;



  let genderImg = maleImage;
  if (strGender === 'Female') {
    genderImg = femaleImage;
  }

  return (
    <div className='container-fluid main-container'>

      <div className='container bg-header' style={{ backgroundImage: `url(${strTeamBanner ? strTeamBanner : bgheader})`, height: '230px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        {/* <div className='teambadge-container'><img src={strTeamBadge ? strTeamBadge : logo} alt="" /></div> */}
      </div>

      <div className='container team-container'>
        <div className='space-div'></div>
        <div className='team-info'>
          <div className='team-bullets'>
            <h3>{strTeam}</h3>
            <p> <img src={imgFounded} alt="" /> Founded: {intFormedYear}</p>
            <p> <img src={imgCountry} alt="" /> Country: {strCountry}</p>
            <p> <img src={imgSport} alt="" /> Sport Type: {strSport}</p>
            <p> <img src={imgGender} alt="" /> Gender: {strGender}</p>
          </div>
          <div className='team-image'>
            <img src={genderImg} alt="" />
          </div>
        </div>
        <br />
        <div className='team-description'>
          <p>{strDescriptionEN}</p>
          <br />
          <Link to={`/`}><button className='btn btn-primary my-btn'>Home Button</button></Link>

        </div>
        <div className='social-container'>
          <a href={`https://www.${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon color="#00acee" icon={faTwitter} /></a>
          <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon color="#4267B2" icon={faFacebook} /> </a>
          <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer">< FontAwesomeIcon color="#FF0000" icon={faYoutube} /></a>

        </div>
      </div>

    </div>
  );
};

export default TeamDetails;