import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import a from './HTML.png'
import d from './java.png'
import e from './mysql.png'
import c from './React.png'
import b from './js.png'
import f from './node.png'
import './Skill.css'




export function Skill() {
    return (
        <>
            <div className="backgr bg-dark">
                <div className="container">
                    <div className="section-title text-center text-white">
                        <h2>SKILLS</h2>
                        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4 head">
                        <div className="col">
                            <div className="card">
                                <img src={a} style={{ width: "8rem", height: "9rem" }} className="card-img-top mx-auto" alt="..." />
                                <div className="card-body float-middle">
                                    <h5 className="card-title">HTML5</h5>
                                    <p className="card-text">HTML5, short for Hypertext Markup Language 5, is the fifth major revision of the HTML standard used for structuring and presenting content on the WWW.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={b} style={{ width: "8rem", height: "9rem" }} className="card-img-top mx-auto" alt="..." />
                                <div className="card-body float-middle">
                                    <h5 className="card-title">JavaScript</h5>
                                    <p className="card-text">JS, or JavaScript, is a high-level, interpreted programming language primarily used for adding interactivity and dynamic behavior to web pages.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={c} style={{ width: "8rem", height: "9rem" }} className="card-img-top mx-auto" alt="..." />
                                <div className="card-body float-middle">
                                    <h5 className="card-title">React</h5>
                                    <p className="card-text">React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces, particularly for web applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={d} style={{ width: "8rem", height: "9rem" }} className="card-img-top mx-auto" alt="..." />
                                <div className="card-body float-middle">
                                    <h5 className="card-title">Java</h5>
                                    <p className="card-text">Java is a high-level, object-oriented programming language developed by James Gosling and his team at Sun Microsystems</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={e} style={{ width: "8rem", height: "9rem" }} className="card-img-top mx-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">MySQL</h5>
                                    <p className="card-text">MySQL is an open-source relational database management system (RDBMS) widely used for storing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={f} style={{ width: "8rem", height: "9rem" }} className="card-img-top text-center mx-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">nodeJS</h5>
                                    <p className="card-text">Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
}