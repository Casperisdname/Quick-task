import React from 'react'
import telegram1 from '/telegram.png'
import google from '/google.png'
import email from '/email.png'

const Login = () => {
    return (
        <div className="login1">
            <div  > <a className="logg" href="#"> <img className="goLogo" src={google} alt="google" /> Continue with Google</a> </div>
            <div> <a  className="logg1" href="#"> <img className="emLogo" src={email} alt="email" /> Continue with Email</a>  </div>
            <div> <a  className="logg2" href="#"> <img className="teLogo" src={telegram1} alt="f" />  Use Telegram Bot </a> </div>
        </div>
    )
}

export default Login
