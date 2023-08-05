import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Resume.css'


export function Resume() {
  return (
    <>
      <div className="back">
        <div className="container">
          <div className="section-title">
            <h2 className="resume text-center fs-1">My Resume</h2>
            <p className="paragrap text-center">Certified Full Stack Developer</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title ">Education</h3>
              <div className="resume-item">
                <h4 className="depart ">B.E &amp; CSE</h4>
                <h5 className="depart2">2018 - 2022</h5>
                <p className="depart3 "><em>UNIVERSITY: ANNA UNIVERSITY , NAME OF INSTITUTION: CHERAN COLLEGE OF
                  ENGINEERING</em></p>
                <p className="depart4 ">B.E CSE
                  CGPA : 8.08%</p>
              </div>
              <div className="resume-item">
                <h5 className="depart5 ">2017 - 2018</h5>
                <p className="depart6 "><em>NAME OF INSTITUTION /UNIVERSITY: Nehruji Government Higher Secondary School</em></p>
                <p className="depart7">HSC
                  PERCENTAGE : 64%</p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                <h5>2015 - 2016</h5>
                <p><em>NAME OF INSTITUTION /UNIVERSITY: Nehruji Government Higher Secondary School</em></p>
                <p>HSC
                  PERCENTAGE : 64%</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Technical Skill</h3>
              <div className="resume-item">
                {/* <h4>MySQL</h4> */}
                <p><em>KGISL</em></p>
                <p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3 </li>
                    <li>JavaScript</li>
                    <li>CoreJava</li>
                    <li>MySQL</li>
                    <li>NodeJs</li>

                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Project</h4>
                <p><em>KGISL</em></p>
                <p>
                  <ul>
                    <h4>Geo box data loss prevention system using geo location defined network</h4>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}