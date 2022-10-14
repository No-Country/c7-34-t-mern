import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
    const data = useRef();
    const navigateTo = useNavigate();

    useEffect(() => {
        data.current = localStorage.getItem('userData');
        console.log(JSON.parse(data.current))
        if(data.current === null) {
            navigateTo("/")
        }
    }, [])  
  return (
    <div>
      { children }
    </div>
  )
}

export default Auth
