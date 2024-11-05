import React, { useState } from "react"
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

function B() {
  const[val,setVal] = useState('')
  const { maskedUrl } = useParams();
  useEffect(()=>{
    const decryptString = (cipherText, secretKey) => {
        const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
      };
      
      const secretKey = 'url';
      const decryptedString = decryptString(decodeURIComponent(maskedUrl), secretKey);
      setVal(decryptedString)
  },[])
    return (
      <>
        <h1>{val}</h1>
      </>
    )
  }
  
  export default B