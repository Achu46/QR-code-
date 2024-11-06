import React, { useState } from 'react'

const Qrcode = (props) => {
   const[img,setImg]=useState("")
   const[loading,setLoading]=useState(false)
   const[qrData,setQrData]=useState("")
   const[qrSize,setQrSize]=useState("")

  async function Qrgenerate(){
    setLoading(true)
      try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
        setImg(url)
      }
      catch(error){
        alert("Error generating QR code",error)
      }
    finally{
      setLoading(false)
    }
  }
  
  // it converts the binary image to download

  function Qrdownload(){
     fetch(img)
      .then((response)=>response.blob()
      .then((blob)=>{
        const link=document.createElement("a")
        link.href=URL.createObjectURL(blob)
        link.download="Qr-code.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
     }))
     .catch((error)=>{
      console.log("Error in downloading QR code",error)
     })
  }

  return (
    <div>
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
      {/* <img src={img} alt="" className='Qrimage'></img>      normal HTML ~ Below is the React js  */}
        {img && <img src={img} alt='' className='Qrimage'></img>}  

        {loading && <p style={{color:"white"}}>Please Wait . . .</p>}

        <label htmlFor='datainput' className='inputdata'>Data to generate Qr code</label>

        <input type='text' value={qrData} id='datainput' placeholder='Enter data for QR code' 
        onChange={(e)=>setQrData(e.target.value)}></input>

        <label htmlFor='imagesize' className='inputdata'>Image size(e.g.,150)</label>

        <input type='text' value={qrSize} id='imagesize' placeholder='Enter image size'
        onChange={(e)=>setQrSize(e.target.value)}></input>

        <button className='generate' disabled={loading} onClick={Qrgenerate}>Generate</button>

        <button className='download' onClick={Qrdownload}>Download</button>

        <p className='footer'>Designed by <a href='https://achu.neocities.org/Portfolio/Mohamed_Asfaque.A/PORTFOLIO/'>Achu</a></p>

      </div>
     
    </div>
  )
}

export default Qrcode
