import React from 'react'
import profile from './../../images/profile.svg'
import bigspring from './../../images/bigspring.svg'
import tonkean from './../../images/tonkean.svg'
import clearbit from './../../images/clearbit.svg'
import mine from './../../images/mine.svg'
import shake from './../../images/shake.svg'
import './MessagePoster.css';

export default function MessagePoster() {
    return (
        <>
            {/* <div className='container text-center'>
                <p className='text-msg-poster  margin-auto' margin-auto>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"</p>
                <img src={profile} className='m-4' alt='logo' />
                <p className='text-name-poster '> Guillaume Cabane <br />
                    CTO @ BigSpring </p>

                <img src={tonkean} className='m-3' alt='logo' />
                <img src={bigspring} className='m-3' alt='logo' />
                <img src={clearbit} className='m-3' alt='logo' />
                <img src={mine} className='m-3' alt='logo' />
                <img src={shake} className='m-3' alt='logo' />
            </div> */}

            <section className='mt-5 mb-5'>
                <div className='foo'>
                <div className='container-msg text-center '>
                <p className='text-msg-poster  margin-auto' margin-auto>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"</p>
                <img src={profile} className='m-4' alt='logo' />
                <p className='text-name-poster '> Guillaume Cabane <br />
                    CTO @ BigSpring </p>

                <img src={tonkean} className='m-3' alt='logo' />
                <img src={bigspring} className='m-3' alt='logo' />
                <img src={clearbit} className='m-3' alt='logo' />
                <img src={mine} className='m-3' alt='logo' />
                <img src={shake} className='m-3' alt='logo' />
            </div>
                </div>
            </section>

        </>
    )
}
