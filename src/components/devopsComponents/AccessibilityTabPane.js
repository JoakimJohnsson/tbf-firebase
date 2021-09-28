import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import AccessibilityTutorialsTabPane from "./partialTabPanes/AccessibilityTutorialsTabPane";
import AccessibilityDocumentationTabPane from "./partialTabPanes/AccessibilityDocumentationTabPane";
import AccessibilityHtmlTabPane from "./partialTabPanes/AccessibilityHtmlTabPane";
import AccessibilityAccessibilityTabPane from "./partialTabPanes/AccessibilityAccessibilityTabPane";

const AccessibilityTabPane = () => {
    return (
        <Tab.Pane eventKey="accessibility-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Accessibility - Test and validation</h2>
                    <p className="lead mb-5">
                        Accessibility is the practice of making your websites usable by as many people as possible.
                        We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also
                        benefits other groups such as those using mobile devices, or those with slow network connections.
                    </p>
                </div>
            </div>
            <Tab.Container id="tabs-tutorials" defaultActiveKey="tutorials" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="tutorials" className="nav-item nav-link">Tutorials</Nav.Link>
                    <Nav.Link eventKey="documentation" className="nav-item nav-link">Documentation</Nav.Link>
                    <Nav.Link eventKey="html" className="nav-item nav-link">HTML validation</Nav.Link>
                    <Nav.Link eventKey="accessibility" className="nav-item nav-link">Accessibility testing</Nav.Link>
                </Nav>
                <Tab.Content>
                    <AccessibilityTutorialsTabPane/>
                    <AccessibilityDocumentationTabPane/>
                    <AccessibilityHtmlTabPane/>
                    <AccessibilityAccessibilityTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default AccessibilityTabPane;
