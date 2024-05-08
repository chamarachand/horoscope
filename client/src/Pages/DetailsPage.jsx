import React from 'react'
import './DetailsPage.css'

function DetailsPage() {
  return (
    <div className='DetailsPage'>
      <div className='wrapper'>
        <h1>Get Your Horoscope Report</h1>
        <div>
          <input type='text' placeholder='Enter Your Name'></input>
          <input type='text' placeholder='Enter Your Sign'/>
          <input type='text' placeholder='Enter Your Gender'/>
          <input type='text' placeholder='Enter Your Biirth District'/>
          <input type='date' placeholder='Enter Your Birth Date'/>
          <input type='time' placeholder='Enter Your Birth Time'/>
          <button>Get Report</button>

        </div>
      </div>
     
    </div>
  )
}

export default DetailsPage
