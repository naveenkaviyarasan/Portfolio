import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'


export function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">   
    <div className="container-fluid navbarClass">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="/">HOME</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/about">ABOUT</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active " href="/resume">RESUME</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active " href="/skill">SKILL</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/services">CERTIFICATE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">CONTACT ME</a>
          </li>
        </ul>
        </div>
        </div>
        </nav>
   
        
        
        
    );
}