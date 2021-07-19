import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Contentpage from './components/Contentpage/Contentpage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/chapters" component={Contentpage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
