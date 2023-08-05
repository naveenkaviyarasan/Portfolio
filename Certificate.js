import React from "react";
import a from './HTML.png'
import b from './Sql.png'
import c from './jQuery.png'
import d from './Screenshot 2.png'
import e from './Screenshot1.png'
import f from './image.jpg.png'
import './matos.jpg'
import 'bootstrap/dist/css/bootstrap.css';




import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';

export function Certificate() {
    return (
        <>
        <div className="backgr bg-dark">
            <div className="container">
                <div className="section-title text-center text-white">
                    <h2>CERTIFICATE</h2>
                    <p>I'm happy to share that l've obtained a new certifications</p>
                </div>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner p-5">
                    <div className="carousel-item active">
                        <img src={d} className="d-block w-75 mx-auto d-block"
                            alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Image 1</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={f} className="d-block w-75 mx-auto d-block" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Image 2</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={e} className="d-block w-75 mx-auto d-block"
                            alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Image 3</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark rounded-5 p-4" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark rounded-5 p-4" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            </div>
        </>
    );
}