import React from 'react'
import { useState } from 'react'
import './DetailsPage.css'

function DetailsPage() {
  //Districts
  const[birthDistrict,setBirthDistrict]=useState("")
  const districts=[
    "Select Your Birth District",
    "District 1",
    "District 2",
    "District 3",
  ]
  const handleDistrictChange = (event) => {
    setBirthDistrict(event.target.value);
};
//sings
 const [yourSing,setYourSing]=useState("");
 const sings=["Select Your Sign","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
 const handleSing = (event) => {
    setYourSing(event.target.value);
   
 }
 //gender
 const [yourGender,setYourGender]=useState("");
const gender=["Select Your Gender","Male","Female"];
const handleGender = (event) => {
  setYourGender(event.target.value);
  
}

  return (
    <div className='DetailsPage'>
      <div className='wrapper'>
        <h1>Get Your Horoscope Report</h1>
        <div>
          <input type='text' placeholder='Enter Your Name'></input>

          <select value={yourSing} onChange={handleSing}>
            {sings.map((sing, index) => (
              <option key={index} value={sing}>{sing}</option>
            ))}

          </select>
        <select value={yourGender} onChange={handleGender}>
          {gender.map((gender, index) => (
            <option key={index} value={gender}>{gender}</option>
            ))}
          </select>
         
          <select value={birthDistrict} onChange={handleDistrictChange}>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
                          ))}
                    </select>

          <input type='date' placeholder='Enter Your Birth Date'/>
          <input type='time' placeholder='Enter Your Birth Time'/>
          <button className='btn'>Get Report</button>

        </div>
      </div>
     
    </div>
  )
}

export default DetailsPage
