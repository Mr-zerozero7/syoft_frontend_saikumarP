import React from 'react'
import './index.scss'
import { Link, useNavigate, } from 'react-router-dom';
import { useState, } from 'react';
import './index.scss'
import { FcGoogle } from "react-icons/fc";
import { FaGithub,FaFacebook } from "react-icons/fa6";

const techIcons = [
'html','css','bootstrap','javascript',
'node01','python','sql','redux',
'react','mongodb']

const techName = [
    'HTML','CSS','Bootstrap','JavaScript',
    'Node','Express','React','SQL','MongoDB']

const Login = () => {
    const [formData, setFormData] = useState({
       email:'',password:''
    })
    const [responseDetails, setResponseDetails] = useState({
        errorMsg:'',errorStatus: false, successMsg:'', successStatus: false
    })
    const navigate = useNavigate()

    const handleEvents= (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    const formSubmit = async(event) => {
        event.preventDefault()
        const toSnakeCase = {
            user_email: formData.email,
            user_password: formData.password,
        }
        try {
            const loginUrl = 'https://syoft.dev/Api/userlogin/api/userlogin'
            const options = {
                method : 'POST',
                body: JSON.stringify(toSnakeCase),
                headers: {'Content-Type' : 'application/json'}
            }
            const response = await fetch(loginUrl, options)
            if(response.ok){
                const data = await response.json()
                // console.log(data)
                if(data.status === false){
                    setResponseDetails({errorMsg: data.msg, errorStatus:true, successStatus: false});
                }else{
                    navigate('/')
                    localStorage.setItem('userData', JSON.stringify(data))
                    // const userDetails = localStorage.getItem('userData')
                    // console.log(userDetails)
                    setResponseDetails({successMsg:'Signed in Successfully', successStatus: true});
                }
            }
        } catch (error) {
            console.log(error)
            setResponseDetails({errorMsg: error.message, errorStatus: true});
        }

        setFormData({email:'',password:''})
    }

  return (
    <div className='signup-page-main-container'>
      <div className='page-container'>
        <div>
            <form className='form-container' onSubmit={formSubmit}>
                <div className='welcome-notes-container'>
                    <h1 className='welcome-head'>Welcome back</h1>
                    <p className='welcome-note'>Drop your Credentials</p>
                </div>
                <input type='email' onChange={handleEvents} required value={formData.email} placeholder='Email...' className='email' name='email'/>
                <input type='password' onChange={handleEvents} required value={formData.password} placeholder='Password...' className='password' name='password' />
                <div className='confirmation-container'>
                    <input type='checkbox' className='checkbox'/>
                    <p>save details for <span>Auto Login</span></p>
                </div>
                <button type='submit' >Login</button>
                <p className='signup-note'>I don't have an account Create Account <Link to='/signup' className='login-link-tag'>SignUp</Link> </p>
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
            <h1 className='signup-wall-head'>Login Note</h1>
            <div className='tech-icons-container'>
                {techIcons.map(icon => (
                    <img className='tech-icon' key={icon} src={`techIcons/${icon}.png`} alt={`${icon}`} />

                ))}
            </div>
            <div className='tech-container'>
                {techName.map(itemName => (
                    <p className='tech-name' key={itemName}>{itemName}</p>

                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
