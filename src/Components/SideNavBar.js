import React from 'react';
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className="SideNavBar">
     
      <div id="content" style={{  }}>
        <div className="scroll-trigger"></div>
        <div className="sidebar">
          <div className="logo-details">
            <div className="logo_name">M</div>
            <i className="bx bx-menu" id="btn"></i>
          </div>
          <ul className="nav-list">
          
            <li>
                <Link to="/">
                    <i className="bx bx-home"></i>
                    <span className="links_name">Acceuil</span>
                </Link> 
                    <span className="tooltip">Acceuil</span>
            </li>

            <li>
        <Link to="/a-propos">
          <i className="bx bx-user"></i>
          <span className="links_name">A propos</span>
          </Link>
        <span className="tooltip">A propos</span>
      </li>
            <li>
                <Link to="/cv">
                    <i className="bx bx-news"></i>
                    <span className="links_name">Curiculum</span>
                </Link>
                    <span className="tooltip">Curiculum</span>
            </li>
            <li>
            <Link to="/portfolio">
                <i className="bx bx-briefcase-alt"></i>
                <span className="links_name">Portfolio</span>
                </Link>
              <span className="tooltip">Portfolio</span>
            </li>
            <li>
            <Link to="/contact">
                <i className="bx bx-envelope"></i>
                <span className="links_name">Contact</span>
                </Link>
              <span className="tooltip">Contact</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cog" id="menu-toggle"></i>
                <span className="links_name">Parametre</span>
              </a>
              <span className="tooltip">Parametre</span>
            </li>
            <li className="profile">
              <div className="profile-details">
                <div className="name_job">
                  <div className="name">2023 © Steve Maltais</div>
                  <div className="job">All Right Reserved.</div>
                </div>
              </div>
              <i id="log_out"></i>
            </li>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="bx bxl-git"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a href="https://codepen.io" target="_blank" rel="noreferrer">
                <i className="bx bxl-codepen"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;