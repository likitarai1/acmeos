import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import acmeosLogo from './../../images/acmeosLogo.png';

const Navbar = () => {
  const [status, setStatus] = useState(false); //loggedout
  const [isMobile, setIsMobile] = useState(true);
  const [topnav, setTopnav] = useState('topnav');
  const [navopen, setNavopen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 820) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setStatus(false);
    console.log('Logged out');
    window.location.href = '/';
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setStatus(true);
      console.log('Here status is ', status);
    }

    if (window.innerWidth > 820) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [status]);

  const toggleMobileNav = () => {
    if (navopen) {
      setTopnav('topnav');
      setNavopen(false);
    } else {
      setTopnav('topnav responsive');
      setNavopen(true);
    }
  };

  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <React.Fragment>
      <nav>
        {status && !isMobile ? (
          <div className="sidenav">
            <div
              style={{
                // paddingLeft: '25%',
                height: '25%',
                marginLeft: '5%',
                marginRight: '5%',
              }}
            >
              <img src={acmeosLogo} alt="logo" style={{
                // paddingLeft: '25%',
                height: '68%',
                marginLeft: '5%',
                marginRight: '5%',
              }}/>
            </div>
            
            <Link to="/chapters">Chapters</Link>
            <Link to="/terminal">Terminal</Link>
            <Link to="/test">Test your learning</Link>
            <Link to="/doubt">Ask a doubt</Link>
            <Link to="/profile">Your Profile</Link>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className={topnav} id="Topnav">
            <div className="symbol" onClick={redirectToHome}>
              AcmeOS
            </div>
            {localStorage.getItem('user') ? (
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                // style={{
                //   padding: '4px 22px',
                //   borderRadius: '28px',
                //   border: 'none',
                //   background: '#3c2e55',
                //   color: 'white',
                //   margin: '11px 5px 0px 11px',
                //   width: '12%',
                // }}
              >
                Login
              </Link>
            )}
            <Link to="/chapters">Chapters</Link>
            <Link to="/terminal">Terminal</Link>
            <Link to="/test">Test your learning</Link>
            <Link to="/doubt">Ask a doubt</Link>
            {localStorage.getItem('user') ? <Link to="/profile">Your Profile</Link> : ''}
            <a href="#" className="icon" onClick={toggleMobileNav}>
              <i className="fa fa-bars" style={{ color: '#3c2e55' }}></i>
            </a>
          </div>
        )}
        {/* <div className="main">
          <h2>Sidebar</h2>
          <div>
            <h2>Responsive Topnav Example</h2>
            <p>Resize the browser window to see how it works.</p>
          </div>
        </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
