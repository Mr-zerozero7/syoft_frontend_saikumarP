import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const [profile, setProfile] = useState('')

    useEffect(() => {
        const userDetails = localStorage.getItem('userData')
        const profileData = JSON.parse(userDetails).user_data[0]
        setProfile(profileData.user_firstname)
        // console.log(profile)
    }, [])
    
    const handleLogout=()=>{
        localStorage.removeItem('userData')
        // console.log(userDetails)
    }

  return (
    <nav className='nav-bar-container'>
        <Link to='/' className='company-name'>
            <h1 >Syoft</h1>
        </Link>
      <div className='menu-container'>
        <p className='menu-item'>Dashboard</p>
        <p className='menu-item'>About</p>
        <p className='menu-item'>Contact</p>
        <p className='menu-item'>Products</p>
      </div>
        <div className='profile-conatiner'>
            <p className='profile-name'>{profile}</p>
            <CgProfile className='profile-icon'/>
            <Link to='/login'>
                <button type='button' onClick={handleLogout}>Logout</button>
            </Link>
        </div>
    </nav>
  )
}

export default Header
