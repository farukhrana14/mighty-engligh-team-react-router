import React from 'react';
import './Teams.css'
import { Link } from 'react-router-dom';

const Teams = (props) => {
    const { idTeam, strTeam, strCountry, strSport, strTeamBadge } = props.team;
    return (
        <div className='card myCard col' style={{ width: '18rem' }}>
            <div className='my-Card-body'>
            <img src={strTeamBadge} className="img-fluid" alt='...' />
            <div className='card-body my-card-body'>
                <h5 className='card-title my-card-title'>{strTeam}</h5>
                <p className='card-text my-card-text'>Sports type: <span></span> {strSport} </p>
                <p className='card-text my-card-text'>Country: <span></span> {strCountry} </p>
                <Link to={`/team/teamdetails/` + idTeam}><button className='btn btn-primary my-btn'>Team Details</button></Link>
            </div>

            </div>
        </div>

    );
};

export default Teams;