import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [status, setStatus] = useState(false); //loggedout
  const [isMobile, setIsMobile] = useState(true);

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
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

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

  const myFunction = () => {
    let x = document.getElementById('Topnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  };

  return (
    <React.Fragment>
      <nav>
        {status && !isMobile ? (
          <div className="sidenav">
            <div
              style={{
                backgroundColor: 'wheat',
                paddingLeft: '25%',
                height: '25%',
                marginLeft: '5%',
                marginRight: '5%',
              }}
            >
              Image
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
          <div className="topnav" id="Topnav">
            <div className="symbol">Home</div>
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
            <a href="#" className="icon" onClick={myFunction}>
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
