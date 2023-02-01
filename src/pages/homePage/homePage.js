import React, { useState, useEffect } from 'react';
import AccountCard from '../../components/accountCard';
import './homePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HomePage() {


  return(
    <div className="homepage__container container">
        <div className='homepage__inner'>
            <div className='homepage__left'>
                <AccountCard />
            </div>
            <div className='homepage__right'>
                <div className='homepage__right-heading'>
                    <div className='title'>
                        <h3>YOUR STARLINKS</h3>
                        <div className='plus'>
                            <span className='plus-line plus-line1'></span>
                            <span className='plus-line plus-line2'></span>
                        </div>
                    </div>
                    <div className='homepage__right-deskr'>
                       <p>
                        Click the + to add a new location, view the Starlink Availability Map for global service availability.
                      </p>   
                    </div>
                </div>
                <ul className='homepage__right-list'>
                    <li className='homepage__right-list-item'>
                        <div className='code'>
                            3AEE5E6A-8188-11ED-98DE-000C29627401
                            <FontAwesomeIcon icon={faArrowRight} />
                          </div>
                          <div className='type'>
                            RECREATIONAL VEHICLE
                          </div>
                          <div className='status'>
                            ACTIVE	
                          </div>
                          <button className='main-btn card'>
                            MANAGE
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomePage;