import React from 'react'
import pipelineimg from './../../images/pipeline-img.svg'
import compassimg from './../../images/compass-img.svg'
import './PipePoster.css';
const PipePoster = () => {
    return (
        <div className=' container d-flex justify-content-evenly align-items-center flex-wrap'>
           
            <div >
                <button className='btn-post-version'> <img src={compassimg} alt='logo' />  For Product Team </button>
                <h1 className='text-post-2 mt-4'>Data-driven pipelines in minutes</h1>
                <p className='light-text-p max-height-500'>Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.</p>
            </div>
            <img src={pipelineimg} className='m-3 pipe' alt='logo' />
        </div>
    )
}

export default PipePoster