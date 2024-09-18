import React from 'react'
import './footer.css'
import { MdLocalShipping, MdHeadphones } from "react-icons/md";
import { GiPig, GiWallet  } from "react-icons/gi";



const Footer = () => {
  return (
    <>
    <div className='footer'>
       <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <GiPig />
                    </div>
                        <div className='detail'>
                            <h3>Great Saving</h3>
                            <p>Never spend your money before you have it.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <MdLocalShipping />
                        </div>
                        <div className='detail'>
                            <h3>Free Delivery</h3>
                            <p>Just for you: FREE Shipping on your order!</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <MdHeadphones />
                        </div>
                        <div className='detail'>
                            <h3>24/7 Support</h3>
                            <p>Communication is at the heart of ecommerce and community</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <GiWallet   />
                        </div>
                        <div className='detail'>
                            <h3>Money back</h3>
                            <p>Communication is at the heart of ecommerce and community</p>
                        </div> 
                    </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='image/logo.webp' alt=''></img>
                    <p>something wirite content back.....</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>0000, S-S Shop Priva Limited</li>
                            <li>+91 1234567899</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Footer