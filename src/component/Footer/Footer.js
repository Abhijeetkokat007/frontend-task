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
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
            </div>

            <div className='m-5'>
                <p className='product-name'>Product</p>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
            </div>

            <div className='m-5'>
                <p className='product-name'>Product</p>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
            </div>

            <div className='m-5'>
                <p className='product-name'>Product</p>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links " href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
                <a class="nav-link m-1 product-links" href="#">Login</a>
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
