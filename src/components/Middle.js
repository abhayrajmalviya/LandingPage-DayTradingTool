import React from 'react'
import Screen from '../assests/screen_1.png'
import playstore from '../assests/playstore.png'
const Middle = () => {
  return (
    <div className='download-div'>
        <div>
            <h1>
                Manage your Intraday and Investment Risk<br/> with <strong>Day Trading Tool</strong>
            </h1>
            <p>
             a better way to trade.
            </p>
            <div className='button-container'>
                <a href="#">
                    <button className='download-button'>

                    </button>
                </a>
                {/* <button className='download-button'>
                    Watch video
                </button> */}
            </div>
        </div>
        <div className='image-container'>
            <img src={Screen} alt="image" 
                width='340px' height='auto'
            />
        </div>
    </div>
  )
}

export default Middle
