import React from 'react'
import img1 from './../../images/img1.svg';
import starimg from './../../images/starimg.svg';
import './Postermain.css'
import Navbar from '../Navbar/Navbar';

function Postermain() {
  return (
    <div>
      <section className='mt-3'>
        <div className='nav-index'><Navbar /></div>

        <div className='section-bg'>

          <div className='tri'>
            <div className='mt-5 sub-container-app d-flex justify-content-evenly align-items-center flex-wrap-reverse '>
              <div className=' text-div'>
                <button className='btn-post-version'> <img src={starimg} alt='logo' />  v3.1 released. Learn more </button>
                <h1 className='post-hedding mt-4'>Your data with real-time analytics</h1>
                <p className='small-text-post mt-3 mb-3'>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
                <button className='btn-post-start'> Start Free Trial </button>
                <button className='btn-post-trial ms-2'> Learn More </button>
              </div>
              <img src={img1} alt='logo' />
            </div>
          </div>
        </div>



      </section>

      {/* <section >
       

       <div className='sub-container-app d-flex justify-content-evenly align-items-center pad'>
           <div className='p-3'>
           <button className='btn-post-version'> <img src={starimg} alt='logo' />  v3.1 released. Learn more </button>
               <h1 className='post-hedding'>Your data with real-time analytics</h1>
               <p className='small-text-post'>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
               <button className='btn-post-start'> Start Free Trial </button>
               <button className='btn-post-trial'> Learn More </button>
           </div>
       <img src={img1} alt='logo' /> 
       
       </div>
           
         
        
       </section> */}
    </div>
  )
}

export default Postermain
