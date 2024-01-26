import React from 'react'
import circleimg from './../../images/circle-img.svg'
import productteamimg from './../../images/productteam-img.svg'
import './Postercircle.css';
const Postercircle = () => {
    return (
        <div className=' container d-flex justify-content-evenly align-items-center flex-wrap'>
            <img src={circleimg} className='m-3 pipe' alt='logo' />
            <div >
                <button className='btn-post-version'> <img src={productteamimg} alt='logo' />  For Product Team </button>
                <h1 className='text-post-2 mt-4'>Launch with the best stack</h1>
                <p className='light-text-p max-height-500'>A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</p>
            </div>
        </div>
    )
}

export default Postercircle
