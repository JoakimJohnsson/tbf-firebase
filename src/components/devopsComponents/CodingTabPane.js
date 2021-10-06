import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import CodingJavaTabPane from "./partialTabPanes/CodingJavaTabPane";
import CodingWorkflowTabPane from "./partialTabPanes/CodingWorkflowTabPane";
import CodingWebTabPane from "./partialTabPanes/CodingWebTabPane";
import CodingJDBCTabPane from "./partialTabPanes/CodingJDBCTabPane";
import CodingReactTabPane from "./partialTabPanes/CodingReactTabPane";
import CodingTDDTabPane from "./partialTabPanes/CodingTDDTabPane";

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
                    <Nav.Link eventKey="coding-web" className="nav-item nav-link">Web / Spring framework exercises</Nav.Link>
                    <Nav.Link eventKey="coding-jdbc" className="nav-item nav-link">JDBC exercises</Nav.Link>
                    <Nav.Link eventKey="coding-react" className="nav-item nav-link">React exercises</Nav.Link>
                    <Nav.Link eventKey="coding-tdd" className="nav-item nav-link">TDD exercises</Nav.Link>
                    <Nav.Link eventKey="coding-workflow" className="nav-item nav-link">Workflow</Nav.Link>
                </Nav>
                <Tab.Content>
                    <CodingJavaTabPane/>
                    <CodingWebTabPane/>
                    <CodingJDBCTabPane/>
                    <CodingReactTabPane/>
                    <CodingTDDTabPane/>
                    <CodingWorkflowTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default CodingTabPane;
