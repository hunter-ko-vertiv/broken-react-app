import React, { Component } from 'react';
import Header from "../components/header";
import AssignmentViewer from "../components/assignment-viewer";

class Assignment extends Component {
    render() {
        return (
            <div>
                <Header />
                <AssignmentViewer />
            </div>
        );
    }
}

export default Assignment;
