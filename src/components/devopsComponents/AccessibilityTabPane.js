import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";

const AccessibilityTabPane = () => {
    return (
        <Tab.Pane eventKey="accessibility-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Accessibility - Test and validation</h2>
                    <p className="lead">
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
                    <Tab.Pane eventKey="tutorials">
                        <div className="row article">
                            <div className="col-12">
                                <h2>Tutorials</h2>
                            </div>
                            <div className="tab-pane-card">
                                <h3>W3C Tutorials</h3>
                                <p>This collection of tutorials shows you how to develop web content that is accessible to people with disabilities,
                                    and that provides a better user experience for everyone.</p>
                                <IconLink link={"https://www.w3.org/WAI/tutorials/"} text={"W3C Tutorials"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="tab-pane-card">
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
                            <div className="tab-pane-card">
                                <h3>Web Content Accessibility Guidelines (WCAG)</h3>
                                <p>Web Content Accessibility Guidelines (WCAG) is developed through the W3C process in cooperation with
                                    individuals and organizations around the world, with a goal of providing a single shared standard for web
                                    content accessibility that meets the needs of individuals, organizations, and governments internationally.</p>
                                <IconLink link={"https://www.w3.org/WAI/standards-guidelines/wcag/"} text={"WCAG Documentation"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="tab-pane-card">
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
                    <Tab.Pane eventKey="html">
                        <div className="row article">
                            <div className="col-12">
                                <h2>HTML</h2>
                            </div>
                            <div className="tab-pane-card">
                                <h3>W3C Validator</h3>
                                <p>The World Wide Web Consortium (W3C) is an international community that develops open
                                    standards
                                    to ensure the long-term growth of the Web. It is the best resource for validating HTML
                                    markup.</p>
                                <IconLink link={"https://validator.w3.org/"} text={"W3C Markup validation service"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="accessibility">
                        <div className="row article">
                            <div className="col-12">
                                <h2>Accessibility</h2>
                            </div>
                            <div className="tab-pane-card">
                                <h3>Access monitor</h3>
                                <p>Managed by the Portuguese government, these are sites and tools to support accessibility and usability, to
                                    ensure promotion good practices and improve the experience of using digital services.</p>
                                <IconLink link={"https://accessmonitor.acessibilidade.gov.pt/"} text={"Access monitor"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="tab-pane-card">
                                <h3>Colour contrast checker</h3>
                                <p>Colour contrast is an important part of web accessibility. And one of the easiest things to check for, and get
                                    right.</p>
                                <IconLink link={"https://www.tpgi.com/color-contrast-checker/"} text={"Colour Contrast Checker"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="tab-pane-card">
                                <h3>axe - Web Accessibility Testing</h3>
                                <p>Find and fix more accessibility issues during website development with axe DevTools. The free axe DevTools
                                    browser extension is a fast, lightweight, yet powerful testing tool driven by the
                                    world's most trusted accessibility testing engine, axe-core, developed by Deque.</p>
                                <IconLink link={"https://addons.mozilla.org/sv-SE/firefox/addon/axe-devtools/"} text={"Axe - Firefox"}
                                          icon={"external-link-alt"} external={true}/>
                                <IconLink link={"https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"} text={"Axe - Chrome"}
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
