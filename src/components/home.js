import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Preferences from './preferences';

class Home extends React.Component{
    render(){
        return(
            <HashRouter>
                <div className="loginPage container">
                    <div className="row">
                    <div className="login col-md-8 order-md-1">
                        <p className="loginHeader">Login</p>
                        <p><input type="text" className="userName" placeholder="Email or phone number"/></p>
                        <p><input type="text" className="password" placeholder="Password"/></p>
                        <p><NavLink to="/preferences"><input type="submit" value="Log In" className="loginBtn"/></NavLink></p>
                        <p className="loginFooter">Don't have an account, Create it.</p>
                        <span><i class="rgtArrow fas fa-arrow-circle-right"></i></span>
                    </div>
                    <div className="signup col-md-4 order-md-2 pl-5">
                        <p className="signupHeader">Create new account</p>
                        <p><input type="text" className="name" placeholder="Name"/></p>
                        <p><input type="text" className="signuserName" placeholder="Email"/></p>
                        <p><input type="text" className="phnNum" placeholder="Phone number"/></p>
                        <p><input type="text" className="signpassword" placeholder="Password"/></p>
                        <p><input type="text" className="cfrmpassword" placeholder="Confirm password"/></p>
                        <p><NavLink to="/preferences"><input type="submit" value="Sign Up" className="signupBtn"/></NavLink></p>
                    </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Home;