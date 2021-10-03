import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import WorkflowGitTabPane from "./partialTabPanes/WorkflowGitTabPane";

const WorkflowTabPane = () => {
    return (
        <Tab.Pane eventKey="workflow-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Workflow</h2>
                    <p className="lead mb-5">
                        How to work.
                    </p>
                </div>
            </div>
            <Tab.Container id="tabs-java" defaultActiveKey="workflow-git" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="disabled" className="nav-item nav-link disabled">Workflow</Nav.Link>
                    <Nav.Link eventKey="workflow-git" className="nav-item nav-link">Git</Nav.Link>
                </Nav>
                <Tab.Content>
                    <WorkflowGitTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default WorkflowTabPane;
