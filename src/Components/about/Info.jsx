import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">-----</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">-----</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-medal about__icon"></i>
        <h3 className="about__title">GATE (2025)</h3>
        <span className="about__subtitle">CS & DA Qualified</span>
      </div>
    </div>
  );
}

export default Info;