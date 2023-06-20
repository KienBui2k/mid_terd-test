import React from 'react'
import './Sub_nav.scss'
export default function Sub_banner() {

  return (
    <div className='sub__banner__container'>
        <div className='sub__banner__item'>
            <div className="sub__banner__img">
                <img src="../images/sub_banner_1.jpg" alt="" />
            </div>
            <div className="sub__banner__info">
                <h5>FREE SHIPPING</h5>
                <p>Suffered Alteration in Some From</p>
            </div>
        </div>
          <div className='sub__banner__item'>
              <div className="sub__banner__img">
                  <img src="../images/sub_banner_2.jpg" alt="" />
              </div>
              <div className="sub__banner__info">
                  <h5>CASH ON DELIVERY</h5>
                  <p>The Internet Tend To Repeat</p>
              </div>
          </div>
          <div className='sub__banner__item'>
              <div className="sub__banner__img">
                  <img src="../images/sub_banner_3.jpg" alt="" />
              </div>
              <div className="sub__banner__info">
                  <h5>45 DAYS RETURN</h5>
                  <p>Making it Look Like Readable</p>
              </div>
          </div>
          <div className='sub__banner__item'>
              <div className="sub__banner__img">
                  <img src="../images/sub_banner_4.jpg" alt="" />
              </div>
              <div className="sub__banner__info">
                  <h5>OPENING ALL WEEK</h5>
                  <p>8AM - 09PM</p>
              </div>
          </div>
    </div>
  )
}
