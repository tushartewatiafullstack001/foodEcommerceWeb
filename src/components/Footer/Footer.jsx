import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
       <img src={assets.logo} alt="" />
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aspernatur asperiores dolores cupiditate quod non ea sint reiciendis, odio iste dolorem minus voluptatum culpa nesciunt alias fugit aliquam harum. Est?
       Sed, ducimus eveniet quidem corrupti tenetur quibusdam perspiciatis quos magni perferendis voluptas nihil eum iusto sapiente numquam aut voluptatem consectetur iste? Totam sapiente beatae atque dolorem ullam ad doloribus recusandae!</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
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
            <li>+1-2-2-11-22</li>
            <li>contactttewatia599@gmail.com</li>
           </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved.

       </p>
    </div>
  )
}

export default Footer
