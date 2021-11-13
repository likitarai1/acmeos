import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Contentpage from './components/Contentpage/Contentpage';
import TerminalUI from './components/Terminal/Terminal';
import Container from 'react-bootstrap/Container';
import Doubtpage from './components/Doubtpage/Doubtpage';
import DoubtForm from './components/Doubtpage/DoubtForm/DoubtForm';
import Commentpage from './components/Commentpage/Commentpage';
import Profile from './components/Profile/Profile';
import Test from './components/Testpage/Test';
import './App.css';

function App() {
  const [status, setStatus] = useState(false); //loggedout
  const [mainDivClass, setMainDivClass] = useState('');

  const user = window.localStorage.user;

  const manipulateClass = () => {
    if (localStorage.getItem('user')) {
      setMainDivClass('main');
    } else {
      setMainDivClass('');
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

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Container className="p-0" fluid>
          <div id="mainDiv" className={mainDivClass}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/login" component={Login} />
              <Route path="/chapters" component={Contentpage} />
              <Route path="/terminal" component={TerminalUI} />
              <Route path="/doubt/ask" component={DoubtForm} />
              <Route path="/doubt" component={Doubtpage} />
              <Route path="/comment" component={Commentpage} />
              <Route path="/test" component={Test} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
