import React from 'react'
import {Navigate,  Outlet } from 'react-router-dom'

const ProtectedRoute = ({element: Component, ...rest}) => {
    const isLoged = localStorage.getItem('userData')
    // console.log(isLoged)
    if(!isLoged){
        return <Navigate to='/login' replace/>
    }
    return <Outlet {...rest}/>
}

export default ProtectedRoute