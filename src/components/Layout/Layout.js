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
            <li><Link to="/1">Page 1</Link></li>
            <li><Link to="/2">Page 2</Link></li>
            <li><Link to="/3">Page 3</Link></li>
            <li><Link to="/4">Page 4</Link></li>
            <li><Link to="/5">Page 5</Link></li>
            <li><Link to="/6">Page 6</Link></li>
            <li><Link to="/7">Page 7</Link></li>
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