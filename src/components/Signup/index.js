import React from 'react'
import { Link } from 'react-router-dom';
import { useState} from 'react';
import './index.scss'
import { FcGoogle } from "react-icons/fc";
import { FaGithub,FaFacebook } from "react-icons/fa6";


// icons from react-icons

const Signup = () => {
    const [formData, setFormData] = useState({
        firstname:'',lastname:'',email:'',password:'',phone:'',city:'',zipcode:''
    })
    const [responseDetails, setResponseDetails] = useState({
        errorMsg:'',errorStatus: false, successMsg:'', successStatus: false
    })

    // onChange events update through setFormData
    const handleEvents= (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }
        
    
    const formSubmit = async(event) => {
        event.preventDefault()
        const toSnakeCase = {
            user_firstname: formData.firstname,
            user_lastname: formData.lastname,
            user_email: formData.email,
            user_password: formData.password,
            user_phone: formData.phone,
            user_city: formData.city,
            user_zipcode: formData.zipcode 
        }
        try {
            const signupUrl = 'https://syoft.dev/Api/user_registeration/api/user_registeration'
            const options = {
                method : 'POST',
                body: JSON.stringify(toSnakeCase),
                headers: {'Content-Type' : 'application/json'}
            }
            const response = await fetch(signupUrl, options)
            if(response.ok){
                const data = await response.json()
                console.log(data)
                if(data.status === false){
                    setResponseDetails({errorMsg: data.msg, errorStatus:true, successStatus: false});
                }else{
                    setResponseDetails({successMsg:'Account Created Successfully', successStatus: true});
                }
            }
        } catch (error) {
            console.log(error)
            setResponseDetails({errorMsg: error.message, errorStatus: true});
        }

        setFormData({firstname:'',lastname:'',email:'',password:'',phone:'',city:'',zipcode:''})
    }

  return (
    <div className='signup-page-main-container'>
      <div className='page-container'>
        <div>
            <form className='form-container' onSubmit={formSubmit}>
                <div className='welcome-notes-container'>
                    <h1 className='welcome-head'>Welcome back</h1>
                    <p className='welcome-note'>Please Create your New Account</p>
                </div>
                <div className='names-container'>
                    <input type='text' onChange={handleEvents} required value={formData.firstname} placeholder='Firstname...' className='firstname' name='firstname'/>
                    <input type='text' onChange={handleEvents} required value={formData.lastname} placeholder='Lastname...' className='lastname' name='lastname'/>
                </div>
                <input type='email' onChange={handleEvents} required value={formData.email} placeholder='Email...' className='email' name='email'/>
                <input type='password' onChange={handleEvents} required value={formData.password} placeholder='Password...' className='password' name='password' />
                <input type='number' onChange={handleEvents} required value={formData.phone} placeholder='Mobile No...' className='phone' name='phone'/>
                <input type='text' onChange={handleEvents} required value={formData.city} placeholder='City...' className='city' name='city'/>
                <input type='number' onChange={handleEvents} required value={formData.zipcode} placeholder='Zip-Code...' className='zipcode' name='zipcode'/>
                <div className='confirmation-container'>
                    <input type='checkbox' className='checkbox'/>
                    <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                </div>
                <button type='submit' >Create your account</button>
                <p>I have an account <Link to='/login' className='login-link-tag'>Login</Link> </p>
                {responseDetails.errorStatus && <p className='error-mesg-tag'>{responseDetails.errorMsg}</p>}
                {responseDetails.successStatus && <p className='success-mesg-tag'>{responseDetails.successMsg}</p>}
            </form>
            <div className='signup-with-social-container'>
                <div className='social-icon'>
                    <FcGoogle  className='s-icon'/>
                </div>
                <div className='social-icon'>
                    <FaGithub  className='s-icon'/>
                </div>
                <div className='social-icon'>
                    <FaFacebook className='s-icon'/>
                </div>
            </div>
        </div>
        <div className='signup-wallpage-container'>
            <h1 className='signup-wall-head'>SignUp Note</h1>
            <div className='tech-icons-container'>
                <img className='tech-icon' src='techIcons/html.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/css.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/bootstrap.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/javascript.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/node01.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/python.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/sql.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/redux.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/react.png' alt='HTML' />
                <img className='tech-icon' src='techIcons/mongodb.png' alt='HTML' />
            </div>
            <div className='tech-container'>
                <p className='tech-name'>HTML</p>
                <p className='tech-name'>CSS</p>
                <p className='tech-name'>Bootstrap</p>
                <p className='tech-name'>JavaScript</p>
                <p className='tech-name'>Node JS</p>
                <p className='tech-name'>Express JS</p>
                <p className='tech-name'>React JS</p>
                <p className='tech-name'>SQL</p>
                <p className='tech-name'>MongoDB</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
