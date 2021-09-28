import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import ResourcesIconsTabPane from "./partialTabPanes/ResourcesIconsTabPane";

const ResourcesTabPane = () => {
    return (
        <Tab.Pane eventKey="resources-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Resources</h2>
                    <p className="lead mb-5">
                        TBA
                    </p>
                </div>
            </div>
            <Tab.Container id="resources-main-tabs" defaultActiveKey="icons" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="icons" className="nav-item nav-link">Icons</Nav.Link>
                </Nav>
                <Tab.Content>
                    <ResourcesIconsTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default ResourcesTabPane;
