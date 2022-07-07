import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SimpleDialogDemo from "../components/simpleDialogDemo";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/login">Candidate</Link>
                </div>

                <div>
                    <Link to="/assignment">Company</Link>
                </div>
                <SimpleDialogDemo />
            </div>

        );
    }
}

export default Home;
