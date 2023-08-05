import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './About.css'
import load from './photo.jpg'



export function About(){
    return(
    <div className=" About BodyClass ">
        <div className="">
    <div className="section-title text-center ">
      <h1>ABOUT ME</h1>
    </div>
    <div className="row">
      <div className="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 p-3 d-flex justify-content-center">
        <img src={load} className="img-fluid rounded-5 h-75" alt="profile picture"/>
      </div>
      <div className="col-md-8 col-lg-8 col-xl-8 col-sm-6 col-xs-6  pt-2 ms-0">
        <h2>CERTIFIED FULL STACK DEVELOPER</h2>
        <p className="fs-3">
        To establish a career in a dynamic company to demonstrate my ability by embracing challenges, achieving corporate goals, and climbing the career ladder via continual learning in an organized environment. 
        </p>
        <div className="row">
          <div className="col-lg-6 biodata">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>03 April
                  2001</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>E-mail:</strong>
                <span>naveenk3401@gmail.com</span>
              </li>
              <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-63839
                  74622</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>dindigul,
                  Tamilnadu</span></li>
            </ul>
          </div>
          <div className="col-lg-6 biodata">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong>
                <span>B.E CSE</span>
              </li>
              <li><i className="bi bi-chevron-right"></i> <strong>Alt-Email:</strong>
                <span>naveenk3401@gmail.com</span>
              </li>
              <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                <span>Available</span>
              </li>
            </ul>
          </div>
    </div>
    </div>
    </div>
    </div>
    </div>
        
        
    );
}





