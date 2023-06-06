import React from "react";
import "./qualificationData.css";

const QualificationData = () => {

  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button  button--flex">
            <i className="uil uil-graduation-cap qualification__active qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button  button--flex">
            <i className="uil uil-briefcase-alt  qualification__icon"></i>
            Exprience
          </div>
        </div>
      </div>

      <div className="qualification__section">
        <div className="qualification__content">
          <div className="qualification__data">
            <div>
              <h3 className="qualification__titile">Bachelor of Engineering</h3>
              <span className="qualification__subtitle">
                R.G.P.V University
              </span>
              <div className="qualification__calender">
                <i class="uil uil-calendar-alt"></i>2011 - 2015
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div>

            </div>
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__titile">Web Devlopment</h3>
              <span className="qualification__subtitle">
                Fullstack Developer
              </span>
              <div className="qualification__calender">
                <i class="uil uil-calendar-alt"></i>2019 - Present
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationData;
