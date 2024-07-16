import React,{useEffect, useState} from 'react'
import { PiNumberCircleTwoFill,PiNumberCircleThreeFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import Header from '../Header'
import './index.scss'

const Dashboard = () => {
    const [profileDetails, setProfileDetails] = useState('')

    
    useEffect(() => {
      const userDetails = localStorage.getItem('userData')
      const data = JSON.parse(userDetails).user_data[0]
    //   console.log(profileData)
        setProfileDetails(data)
    }, [])
    
  return (
    <>
    <Header/>
    <div className='dashboard-conatiner'>
        <div className='connect-account'>
            <p className='connet-steps'><TiTick className='connect-icon'/> Connect your Linkedin</p>
            <p className='connet-steps'><PiNumberCircleTwoFill className='connect-icon'/> Setup your account</p>
            <p className='connet-steps'><PiNumberCircleThreeFill className='connect-icon'/> invite your team</p>
        </div>
        <div className='profile-welcome-container'>
            <h1 className='profile-welcome-head'>Congrats your profile is listed</h1>
            <p className='profile-note'>update profile details <span>[backend]</span>...</p>
        </div>
      <div className='dashboad-card'>
        <h1 className='profile-name'><span>Your Name:</span> {`${profileDetails.user_firstname} ${profileDetails.user_lastname}`}</h1>
        <p className='email-tag'><span>Email:</span> {profileDetails.user_email}</p>
        <p className='password-tag'><span>Password:</span> {profileDetails.user_password}</p>
        <p className='phone-tag'><span>Mobile Number:</span> +91-{profileDetails.user_phone}</p>
        <p className='city-tag'><span>Loaction:</span> {profileDetails.user_city}</p>
        <p className='zipcode-tag'><span>PinCode:</span> {profileDetails.user_zipcode}</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard
