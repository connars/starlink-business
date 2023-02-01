import React, { useState, useEffect } from 'react';
import AccountCard from '../../components/accountCard';

function HomePage() {


  return(
    <div className="homepage__container container">
        <div className='homepage__inner'>
            <div className='homepage__left'>
                <AccountCard />
            </div>
            <div className='homepage__rigth'>

            </div>
        </div>
    </div>
  )
}

export default HomePage;