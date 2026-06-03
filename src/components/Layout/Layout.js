import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      {/* Header */}
      <div className="header">
        WELCOME TO THE PROJECT
      </div>

      {/* Main Layout */}
      <div className="container">

        {/* Sidebar */}
        <nav className="sidenav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Skils">Skils</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Certificates">Certificates</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Experience">Experience</Link></li>

          </ul>
        </nav>

        {/* Main Content */}
        <div className="maincontent">
          <Outlet />
        </div>

      </div>
    </>
  );
};

export default Layout;