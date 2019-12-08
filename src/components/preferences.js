import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

class Preferences extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            keyword1: false,
            keyword2: false,
            keyword3: false,
            keyword4: false
        }
    }

    onCickHander = (name) => {
        const val = this.state[name];
        this.setState({[name]:!val});
    }
    render(){
        return(
            <div className="container">
                <p className="contentHeader">Preferences</p>
                <div className="row">
                    <div className="col-md-6">
                        <p className={`firstBtn ${(this.state.keyword1 ? "PreferencesActive" : "")}`} onClick={()=>this.onCickHander("keyword1")}>Keywords</p>
                    </div>
                    <div className="col-md-6">
                        <p className={`firstBtn ${(this.state.keyword2 ? "PreferencesActive" : "")}`} onClick={()=>this.onCickHander("keyword2")}>Keywords</p>
                        {/* <p className="firstBtn">Keywords</p> */}
                    </div>
                    <div className="col-md-6">
                        {/* <p className="firstBtn">Keywords</p> */}
                        <p className={`firstBtn ${(this.state.keyword3 ? "PreferencesActive" : "")}`} onClick={()=>this.onCickHander("keyword3")}>Keywords</p>
                    </div>
                    <div className="col-md-6">
                        {/* <p className="firstBtn">Keywords</p> */}
                        <p className={`firstBtn ${(this.state.keyword4 ? "PreferencesActive" : "")}`} onClick={()=>this.onCickHander("keyword4")}>Keywords</p>
                    </div>
                    <div className="align-self-center mx-auto">
                        <p><NavLink to="/comSearch"><input className="endBtn" type="submit" value="Submit"/></NavLink></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preferences;