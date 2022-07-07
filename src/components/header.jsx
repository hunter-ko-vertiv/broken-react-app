import React, { Component } from 'react';
import "./header.css"
class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Alacrity</h1>
                    <h1>Candidate Name</h1>
                    <h1>Countdown</h1>
                    <h1>Submit</h1>
                </div>
            </div>
        );
    }
}

export default Header;
