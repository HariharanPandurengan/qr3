import QRCode from "react-qr-code";
import CryptoJS from 'crypto-js';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UrlGen() {
  
    const[qr2,setQr2] = useState('')
    const[qr3,setQr3] = useState('')

    const navigate  = useNavigate()
    const encryptString = (string, secretKey) => {
      return CryptoJS.AES.encrypt(string, secretKey).toString();
    };
    
    const secretKey = 'url';
    const originalString = 'https://www.xorostory.com';

    const encryptedString = encryptString(originalString, secretKey);
    const encryptedString2 = encryptString(qr2, secretKey);

  
    const encodedString = encodeURIComponent(encryptedString);
    const encodedString2 = encodeURIComponent(encryptedString2);

    sessionStorage.setItem('hiddenParam',qr3)
    useEffect(()=>{
      sessionStorage.removeItem('hiddenParam')
      sessionStorage.setItem('hiddenParam',qr3)
    },[qr3])
    return (
      <section style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
        <div style={{marginRight:'50px'}}>
          <QRCode value={`https://qr3-eta.vercel.app/unMask/${encodedString}`} />
        </div>
        <div style={{marginRight:'50px'}}> 
          <QRCode value={`https://qr3-eta.vercel.app/A/${encodedString2}`} /> <br></br>
          <input placeholder="Enter the value to send" onChange={(e)=>setQr2(e.target.value)}/>
        </div>
        <div>
          <button style={{backgroundColor:'green',color:'white'}} onClick={()=>{
            navigate('/B')
          }}>click here to view 3D model</button> <br></br>
          <input placeholder="Enter the value to send" onChange={(e)=>setQr3(e.target.value)}/>
        </div>
      </section>
    )
  }
  
  export default UrlGen