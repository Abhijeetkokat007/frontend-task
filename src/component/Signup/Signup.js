import React from 'react'
import logingoogle from './../../images/google-login.svg';
import './Signup.css'
function Signup() {
  return (
    <div className='text-center signup-main-container'>
      <div className='signup-contaiter text-center'>
        <p className='text-signup'>Sign Up</p>
       <button className='btn-tryfree m-3'> Start your free trial </button>
       <input type='text' className='input-table m-3' placeholder='Your primary email'/>
       <input type='text' className='input-table m-3' placeholder='Password'/>
       <input type='text' className='input-table m-3' placeholder=' Re-type Password'/>
       <p>OR</p>
       <img src={logingoogle} className='m-3 ' alt='logo' />
       <p className='line-cont'></p>
       <p className='text-login text-center'>Already have an account? <span className='col-primay'>Login</span> </p>
      </div>
    </div>
  )
}

export default Signup
