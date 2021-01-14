import React from 'react';
import Arrow from '../img/arrow.svg';

const Footer = () => {
  return (
    <footer className="d-flex flex-md-row flex-column justify-content-around align-items-center bg-black py-6 px-2 center-text-small-screen">
      <div className="text-white align-self-start">
        <p className="text-capitalize text-head"><img src={Arrow} alt="arrow" className="pr-3 arrow"/>So do you want us to work together?</p>
        <h3 className="text-uppercase text-brief"><img src={Arrow} alt="arrow" className="invisible pr-3 arrow"/>brief me.</h3>
      </div>
      <div className="text-white text-contacts">
        <p>
          Email: nifemibams@gmail.com
        </p>
        <p>
          Github: wintercameearly
        </p>
        <p>
          Twitter: @nifemibam
        </p>
        <p>
          Instagram: @nifemibam
        </p>
      </div>
      <div>
        <p className="text-name text-white text-uppercase">nifemi.</p>
      </div>
    </footer>
  );
};

export default Footer;
