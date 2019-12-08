import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

class Popup extends React.Component{
    render(){
        return(
            <div className="popupCnt">
                <div className=" popupMsg alert alert-primary" role="alert">
                    You have Successfully joined the group!
                </div>
                <NavLink to="/comAvailable"><button className="loginBtn">Go to your Communities</button></NavLink>
            </div>
        );
    }
}

export default Popup;
