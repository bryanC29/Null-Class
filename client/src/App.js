// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Internships from './pages/internships';
import Login from './pages/login';
import Register from './pages/register';
import UserProfile from './components/userProfile';
import NotFound from './components/notFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/internships" component={Internships} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile/:userId" component={UserProfile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
