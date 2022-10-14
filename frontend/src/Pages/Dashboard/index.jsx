import React, { useEffect, useRef } from 'react'
import Auth from "@/HOC/auth";

const Dasboard = () => {
    const data = useRef();

    useEffect(() => {
        data.current = localStorage.getItem('userData');
        console.log(JSON.parse(data.current))
    }, [])  
    return (
    <Auth>
        qweqwuikje
    </Auth>
  )
}

export default Dasboard
