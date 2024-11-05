import CryptoJS from 'crypto-js';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UrlUnmask() {
    const { maskedUrl } = useParams();
    useEffect(()=>{
        const decryptString = (cipherText, secretKey) => {
            const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
            return bytes.toString(CryptoJS.enc.Utf8);
          };
          
          const secretKey = 'url';
          const decryptedString = decryptString(decodeURIComponent(maskedUrl), secretKey);

        window.location.href = decryptedString;
    
    },[])
  
    return (
      <section style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <p>Loading...</p>
      </section>
    )
  }
  
  export default UrlUnmask