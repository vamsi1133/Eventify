import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";


class Booking extends React.Component{
    render(){
        return( 
            <div className="bookingCnt">
                <div className="gap">
                    {/* <span className="bookingHeadings">From:</span> */}
                    <input className="signuserName" type="text" placeholder="Pickup location" />
                </div>
                <div className="gap">
                    {/* <span className="bookingHeadings">To:</span> */}
                    <input className="signuserName" type="text" placeholder="Drop location" />
                </div>
                <div className="gap">
                    {/* <span className="sideHeading">Cab Provider:</span> */}
                    
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ola
                            </button>
                            {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Uber</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div> */}
                        </div>
                    
                </div>
                <div className="gap">
                    {/* <span className="bookingHeadings">Price:</span> */}
                    <button className="loginBtn">_____&#8377;</button>
                </div>
                <button className="gap loginBtn">Book Now</button>
            </div>
        );
    }
}

export default Booking;