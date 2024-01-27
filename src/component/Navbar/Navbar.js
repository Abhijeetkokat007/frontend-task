import React from 'react';
import './Navbar.css';
import Logo from './../../images/logo.svg'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid pad-start">
    <a class="navbar-brand" href="#"> <img src={Logo} alt='logo' /> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
      </ul>
      
      <ul class="navbar-nav me-auto mb-4 mb-lg-0">
        <li class="nav-item mt-2">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </li>
        <li class="nav-item mt-2 ms-4 curcer">
          <a class="nav-link curcer" href="#">Pricing</a>
        </li>
        <li class="nav-item mt-2 ms-4 curcer">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item mt-2 ms-4 curcer">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item ms-4 curcer">
          <a class="nav-link" href="#">
          <button type="button" class="btn-nav ">Start Free Trial</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar


