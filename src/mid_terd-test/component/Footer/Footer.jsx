import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <div className='footer__container'>
        <div className="footer__menu">
              <div className="footer__menu__one">
                    <span>Blog</span>
                    <span>FAQs</span>
                    <span>contact us</span>
              </div>
              <div className="footer__menu__two">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-pinterest"></i>
              </div>
        </div>
        <div className="footer__info">
              <p><i class="fa-regular fa-copyright"></i> 2023 All Right Reserverd. This template is made with by <span>Quintus Labs</span></p>
        </div>  
    </div>
  )
}
