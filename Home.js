import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';





export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="container-fluid home text-center col-lg-12 col-md-12 col-sm-12 col-xs-12 position-absolute ">
      {isLoading ? (
        <div className="loading">
          <h3 className="loading-text load">Loading...</h3>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text position-absolute">
            <h2 className="hero_title text-align-center text-white">Hi, IT'S ME NAVEEN K</h2>
            <p className="hero_desc text-white">I AM A PROFESSIONAL FULLSTACK DEVELOPER</p>
          </div>
        </div>
      )}
    </div>


   );
}











//     );
// }