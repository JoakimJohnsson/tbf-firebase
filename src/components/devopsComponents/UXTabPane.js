import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import UXColorTabPane from "./partialTabPanes/UXColorTabPane";
import AccessibilityTutorialsTabPane from "./partialTabPanes/UXTutorialsTabPane";

const UXTabPane = () => {
    return (
        <Tab.Pane eventKey="ux-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>UX - User experience</h2>
                    <p className="lead mb-5">
                        User experience (UX) design is the process design teams use to create products that provide meaningful and relevant
                        experiences to users. This involves the design of the entire process of acquiring and integrating the product,
                        including aspects of branding, design, usability and function.
                    </p>
                </div>
            </div>
            <Tab.Container id="tabs-tutorials" defaultActiveKey="ux-tutorials" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="disabled" className="nav-item nav-link disabled">User experience</Nav.Link>
                    <Nav.Link eventKey="ux-tutorials" className="nav-item nav-link">Tutorials</Nav.Link>
                    <Nav.Link eventKey="color" className="nav-item nav-link">Color</Nav.Link>
                </Nav>
                <Tab.Content>
                    <UXColorTabPane/>
                    <AccessibilityTutorialsTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default UXTabPane;
