import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet illum soluta voluptatibus ducimus iusto, vitae mollitia odit, est ipsam placeat pariatur dolorem at nesciunt ab labore dicta veniam. Doloribus.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}alt="" />
                    <img src={assets.twitter_icon}alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                   
                </div>
                <div className="footer-content-right">
                       <h2>GET IN TOUCH</h2> 
                       <ul>
                        <li>+919876543210</li>
                        <li>contact@bitebuddy.com</li>
                       </ul>
                    </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © 2024 BiteBuddy.com - All Right Reseved.</p>
    </div>
  )
}

export default Footer
