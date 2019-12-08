import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <NavLink className="headerq" to ="/"><span className="header">
                Eventify
                </span></NavLink>
            </div>
        );
    }
}

export default Header;