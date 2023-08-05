import React from "react";
import { Link } from "react-router-dom";
// import './Menu.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap';

export function Menu() {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/"}><a className="nav-link active text-danger">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/About"}><a className="nav-link text-success">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Resume"}><a className="nav-link text-success">Resume</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/services"}><a className="nav-link text-success">Certificate</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Contact"}><a className="nav-link text-success">Certificate</a></Link>
                    </li>
                </ul>
            </div>
</nav>
        </>



    );
}