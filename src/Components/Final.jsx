import React from 'react';
import telegram1 from '/telegram.png';
import facebook from '/facebook.png';
import insta from '/insta.png';
import x from '/x.png';




const Final = () => {
    return (
        <footer>
                <p>Follow us</p>
                <div >
                    
                    <a className="fl" href="#"> <img className='teLogo1' src={telegram1} alt="t" />  </a>
                    <a className="fl"  href="#"><img className="faLogo" src={facebook} alt="f" /> </a>
                    <a className="fl" href="#"> <img className="inLogo" src={insta} alt="i" /></a>
                    <a className="fl" href="#"> <img className="xLogo" src={x} alt="" /></a>
                </div>
        </footer>
    )
}

export default Final
