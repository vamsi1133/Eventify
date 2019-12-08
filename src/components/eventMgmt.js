import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import MapImg from '../assets/map.png';

class Management extends React.Component{
    render(){
        return(
            <div className="detailsCnt">
                <p className="detailsHeader">Event One</p>
                <p>
                    <span className="secondDetHead">Description:</span>
                    <span className="detailCnt">
                        This is the des part Description is the pattern of narrative development that 
                        aims to make vivid a place, object, character, or group. Description is one of 
                        four rhetorical modes, along with exposition, argumentation, and narration. 
                        In practice it would be difficult to write literature that drew on just one of the
                        ur basic modes.
                    </span>
                </p>
                <p>
                    <span className="secondDetHead">Details:</span>
                    <span className="detailCnt">
                        This is the details part of this Event
                    </span>
                </p>
                <p>
                    <span className="secondDetHead">Location:</span>
                    <span className="detailCnt">
                        Located in Vamshi IT Park, Near Vamshi Road, Chennai.
                    </span>
                </p>
                <div className="container">
                    <div className="row">
                <p className="lwrCnt col-md-6">
                    <span className="secondDetHead">Theme:</span>
                    <span className="detailCnt">The themes of the event are as follows</span>
                    <ul>
                        <li>Disaster Management</li>
                        <li>Women Safety</li>
                        <li>Peer To Peer Transaction</li>
                        <li>Community Building</li>
                        <li>Smart Mobility</li>
                        <li>Smart City</li>
                        <li>Sustainable Education</li>
                        <li>Social Cause</li>
                    </ul>
                </p>
                <p className="rgtCnt col-md-6">
                    <p className="secondDetHead">Map:</p>
                    <img  className="detailCnt" src={MapImg} height="180px" width="400px" />
                </p>
                </div>
                </div>
                
                <div className="clasas">
                <NavLink to="/popup">
                    <input className="endBtn" type="submit" value="Register"/>
                    </NavLink>
                </div>
                
            </div>
        );
    }
}

export default Management;