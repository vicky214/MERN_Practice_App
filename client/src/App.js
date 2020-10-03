import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import Header from './components/Header';
import Signup from './components/Signup'
import Login from './components/Login'
import Data from './components/Data'
import Form from './components/Form'
import Otp from './components/Otp'
import Rating from './components/Rating';
function App() {
  return (
    <BrowserRouter>
      <ReactNotification />
    <Header />
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/form" component={Form} />
      <Route path="/login" component={Login} />
      <Route path="/data" component={Data} />
      <Route path="/otp" component={Otp} />
      <Route path="/rating" component={Rating} />


    </Switch>
    </BrowserRouter>
  );
}

export default App;
