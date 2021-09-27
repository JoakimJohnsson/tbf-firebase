import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";

const AccessibilityTabPane = () => {
    return (
        <Tab.Pane eventKey="accessibility-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Accessibility</h2>
                    <p className="lead">Accessibility is the practice of making your websites usable by as many people as possible.
                        We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also
                        benefits other groups such as those using mobile devices, or those with slow network connections.</p>
                </div>
            </div>
            <Tab.Container id="tabs-tutorials" defaultActiveKey="tutorials" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="tutorials" className="nav-item nav-link">Tutorials</Nav.Link>
                    <Nav.Link eventKey="documentation" className="nav-item nav-link">Documentation</Nav.Link>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="tutorials">
                        <div className="row article">
                            <div className="col-12">
                                <h2>Tutorials</h2>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>W3C Tutorials</h3>
                                <p>This collection of tutorials shows you how to develop web content that is accessible to people with disabilities,
                                    and that provides a better user experience for everyone.</p>
                                <IconLink link={"https://www.w3.org/WAI/tutorials/"} text={"W3C Tutorials"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>A11ycasts</h3>
                                <p>A series of easy going YouTube videos made by the Google Chrome Developers team.</p>
                                <IconLink link={"https://www.youtube.com/watch?v=HtTyRajRuyY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"}
                                          text={"A11ycasts"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="documentation">
                        <div className="row article">
                            <div className="col-12">
                                <h2>Documentation</h2>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>Web Content Accessibility Guidelines (WCAG)</h3>
                                <p>Web Content Accessibility Guidelines (WCAG) is developed through the W3C process in cooperation with
                                    individuals and organizations around the world, with a goal of providing a single shared standard for web
                                    content accessibility that meets the needs of individuals, organizations, and governments internationally.</p>
                                <IconLink link={"https://www.w3.org/WAI/standards-guidelines/wcag/"} text={"WCAG Documentation"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>Accessible Rich Internet Applications (WAI-ARIA)</h3>
                                <p>Accessibility of web content requires semantic information about widgets, structures, and behaviors, in order
                                    to allow assistive technologies to convey appropriate information to persons with disabilities. This
                                    specification provides an ontology of roles, states, and properties that define accessible user interface
                                    elements and can be used to improve the accessibility and interoperability of web content and applications. </p>
                                <IconLink link={"https://www.w3.org/TR/wai-aria-1.1/"} text={"WAI-ARIA Documentation"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default AccessibilityTabPane;
