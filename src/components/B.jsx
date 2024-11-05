import React, { useState } from "react"
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

function B() {
  const[val,setVal] = useState('')
 
  useEffect(()=>{
    setVal(sessionStorage.getItem('hiddenParam'))
    sessionStorage.removeItem('hiddenParam')
  },[])
    return (
      <>
        <h1>{val}</h1>
      </>
    )
  }
  
  export default B