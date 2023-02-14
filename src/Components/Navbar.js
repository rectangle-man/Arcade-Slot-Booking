import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <>
    <div className="nav">
        <div className="tagLogo">
            <img className='tagLogoImg' src="./Assets/tagLogo.png"/>
        </div>
        <div className="arcadeLogo">
            <img className='arcadeLogoImg' src="./Assets/arcadeLogo.png"/>
        </div>
        <div className="login">
            <img className='loginLogoImg' src="./Assets/signIn.png"/>
        </div>
    </div> 
    </>
  )
}
