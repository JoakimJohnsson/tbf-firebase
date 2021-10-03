import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import CodingJavaTabPane from "./partialTabPanes/CodingJavaTabPane";

const CodingTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Programming & coding</h2>
                    <p className="lead mb-5">
                        Resources and tutorials to different programming languages.
                    </p>
                </div>
            </div>
            <Tab.Container id="tabs-java" defaultActiveKey="coding-java" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="disabled" className="nav-item nav-link disabled">Programming & coding</Nav.Link>
                    <Nav.Link eventKey="coding-java" className="nav-item nav-link">Java exercises</Nav.Link>
                </Nav>
                <Tab.Content>
                    <CodingJavaTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default CodingTabPane;
