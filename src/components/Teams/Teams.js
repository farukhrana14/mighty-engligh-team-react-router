import React from 'react';
import commonImage from '../../images/englishFootballTeams.png'
import './Teams.css'
import { Link, useHistory } from 'react-router-dom';


const Teams = () => {

    




    return (
        
        <div className='row row-cols-3 myRow '>
            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <Link to={`/team/teamdetails`}><button className='btn btn-primary'>Click</button></Link>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>
 
            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>

            <div className='card myCard col' style={{ width: '18rem' }}>
                <img src={commonImage} alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Some quick example text to build on the card </p>
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>
        </div>
        
    );
};

export default Teams;