import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import ResourcesIconsTabPane from "./partialTabPanes/ResourcesIconsTabPane";
import ResourcesDatabasesTabPane from "./partialTabPanes/ResourcesDatabasesTabPane";
import ResourcesImagesTabPane from "./partialTabPanes/ResourcesImagesTabPane";

const ResourcesTabPane = () => {
    return (
        <Tab.Pane eventKey="resources-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Resources</h2>
                    <p className="lead mb-5">
                        Free and easy-to-use resources for making your projects look good, feel ok and blow minds.
                    </p>
                </div>
            </div>
            <Tab.Container id="resources-main-tabs" defaultActiveKey="icons" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="icons" className="nav-item nav-link">Icons and fonts</Nav.Link>
                    <Nav.Link eventKey="images" className="nav-item nav-link">Free images</Nav.Link>
                    <Nav.Link eventKey="databases" className="nav-item nav-link">Databases</Nav.Link>
                </Nav>
                <Tab.Content>
                    <ResourcesIconsTabPane/>
                    <ResourcesImagesTabPane/>
                    <ResourcesDatabasesTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default ResourcesTabPane;
