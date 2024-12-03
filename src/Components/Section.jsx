import React from 'react'
import data from '/data.png'
import airtime from '/airtime.png'
import tv from '/tv.png'
import change from '/change.png'
import bulb from '/bulb.png'
import gift from '/gift.png'

const Section = () => {
    return (
        <div className="boxContent">
            <div className="fbox">
            <div className="boxes"> <img className='dLogo' src={data} alt="data" /> DATA </div>
            <div className="boxe"> <img className="aLogo" src={airtime} alt="airtime" /> AIRTIME </div>
            </div>
        <div  className="fbox" >
            <div className="boxes1"> <img className="tLogo" src={tv} alt="tv" /> TV </div>
            <div className="boxe1"> <img className="cLogo" src={change} alt="airtime2cash" /> AIRTIME 2 CASH </div>
        </div>
          <div className="fbox" >
               <div  className="boxes" > <img className="bLogo" src={bulb} alt="bulb" /> ELECTRICITY </div>
              <div  className="boxe"> <img className="gLogo" src={gift} alt="gift" /> GIFTCARDS </div>
          </div>
         
        </div>
    )
}

export default Section
