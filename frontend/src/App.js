import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Contentpage from './components/Contentpage/Contentpage';
import TerminalUI from './components/Terminal/Terminal';
import './App.css';

function App() {
  const [status, setStatus] = useState(false); //loggedout
  // const [appClass, setAppClass] = useState(``);
  // const [user, setUser] = useState(undefined);

  // setUser(window.localStorage.user);

  // const manipulateClass = () => {
  //   let x = document.getElementById('mainDiv');
  //   if (status) {
  //     x.className = 'main';
  //   } else {
  //     x.classList.remove('main');
  //   }
  // };

  // const handleUser = () => {
  //   if (window.localStorage.user) {
  //     setAppClass(`main`);
  //   } else {
  //     setAppClass(``);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('storage', handleUser);
  // });

  const user = window.localStorage.user;

  const manipulateClass = () => {
    let x = document.getElementById('mainDiv');
    if (localStorage.getItem('user')) {
      x.className = 'main';
    } else {
      x.classList.remove('main');
    }
  };

  useEffect(() => {
    console.log('your window local storage :: ', user);
    if (user) {
      setStatus(true);
      manipulateClass();
      console.log('Here $tatu$ is ', status);
    } else {
      manipulateClass();
      console.log('i am log out');
    }
  }, [status]);
  // useEffect(() => {
  //   if (window.localStorage.user) {
  //     console.log('hi');
  //   } else {
  //     console.log('bye');
  //   }
  // });

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <div id="mainDiv">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/chapters" component={Contentpage} />
            <Route path="/terminal" component={TerminalUI} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
