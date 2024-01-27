import React from 'react'
import './Footer.css'
import Logo from './../../images/logo.svg'
import sendicon from './../../images/send-icon.svg'
import copywrite from './../../images/copywrite.svg'
import facebook from './../../images/facebook.svg'
import insta from './../../images/insta.svg'
import twiter from './../../images/twitte.svg'

function Footer() {
    window.href = '#'
    return (
        <>
        <div className='main-container'>
        <div className='mt-5 mb-5 main-container  d-flex justify-content-around align-items-top flex-wrap'>
            <div className='container-1 m-4'>
                <img src={Logo} alt='logo' />
                <p className=' mt-3 foot-description'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim </p>
                <img src={facebook} className='' alt='logo' />
                <img src={twiter} className='m-4' alt='logo' />
                <img src={insta} className='' alt='logo' />
            </div>

            <div className='m-5'>
                <p className='product-name'>Product</p>
                <a class="nav-link m-1 product-links" href="#">Connection</a>
                <a class="nav-link m-1 product-links" href="#">Protocol</a>
                <a class="nav-link m-1 product-links " href="#">Persons</a>
                <a class="nav-link m-1 product-links " href="#">Integrations</a>
                <a class="nav-link m-1 product-links" href="#">Catalog</a>
                <a class="nav-link m-1 product-links" href="#">Pricing</a>
                <a class="nav-link m-1 product-links" href="#">Security</a>
                <a class="nav-link m-1 product-links" href="#">GDPR</a>
            </div>

            <div className='m-5'>
                <p className='product-name'>For Devlopers</p>
                <a class="nav-link m-1 product-links" href="#">Docs</a>
                <a class="nav-link m-1 product-links" href="#">API</a>
                <a class="nav-link m-1 product-links " href="#">Open Source</a>
                <a class="nav-link m-1 product-links " href="#">Engineering Team</a>
           
            </div>

            <div className='m-5'>
                <p className='product-name'>Company</p>
                <a class="nav-link m-1 product-links" href="#">Career</a>
                <a class="nav-link m-1 product-links" href="#">Blog</a>
                <a class="nav-link m-1 product-links " href="#">Press</a>
               
            </div>

            <div className='m-5'>
                <p className='product-name'>Suport</p>
                <a class="nav-link m-1 product-links" href="#">Help Center</a>
                <a class="nav-link m-1 product-links" href="#">Contact Us</a>
                <a class="nav-link m-1 product-links " href="#">Security</a>
                <a class="nav-link m-1 product-links " href="#">Bulletins</a>
                <a class="nav-link m-1 product-links" href="#">Documentation</a>
                <a class="nav-link m-1 product-links" href="#">Partner</a>
                <a class="nav-link m-1 product-links" href="#">Portal</a>
                
            </div>

            <div className='m-5'>
                <p className='product-name'>Newsetter</p>
                <input type='text' className='input-box' />

                <img src={sendicon} onClick={() => {
                    window.href = '1'
                }} className='send-icon' alt='logo' />
            </div>
        </div>
<div className='text-center m-5'>
<span className='product-name'>Rahul Rao</span>   
<img src={copywrite} className='ms-3'alt='logo' />
</div>
</div>

        </>
    )
}

export default Footer
