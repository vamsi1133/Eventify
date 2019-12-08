import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Preferences from './components/preferences';
import Search from './components/comSearch';
import Home from './components/home';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Details from './components/comDetails';
import Popup from './components/popup';
import Available from './components/comAvailable';
import Notification from './components/notification';
import Booking from './components/cabBooking';
import Management from './components/eventMgmt';

function App() {
  return (
    <HashRouter>
      <div className="App"> 
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/preferences" component={Preferences}/>
        <Route path="/comSearch" component={Search}/>
        <Route path="/comDetails" component={Details}/>
        <Route path="/popup" component={Popup}/>
        <Route path="/comAvailable" component={Available}/>
        <Route path="/cabBooking" component={Booking}/>
        <Route path="/eventMgmt" component={Management}/>
        <Notification/>
        <Footer/>
      </div>  
    </HashRouter>
  );
}

export default App;
