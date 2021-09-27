import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";

const ValidationTabPane = () => {
    return (
        <Tab.Pane eventKey="validation-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Validation</h2>
                    <p className="lead">Informative and helpful resources for checking the validity of web documents. Copy
                        and
                        paste snippets of code, or big chunks, and get instant feedback.</p>
                </div>
            </div>
            <Tab.Container id="tabs-html" defaultActiveKey="html" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="html" className="nav-item nav-link">HTML</Nav.Link>
                    <Nav.Link eventKey="accessibility" className="nav-item nav-link">Accessibility</Nav.Link>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="html">

                        <div className="row article">
                            <div className="col-12">
                                <h2>HTML</h2>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
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
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>Access monitor</h3>
                                <p>Managed by the Portuguese government, these are sites and tools to support accessibility and usability, to
                                    ensure promotion good practices and improve the experience of using digital services.</p>
                                <IconLink link={"https://accessmonitor.acessibilidade.gov.pt/"} text={"Access monitor"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>Colour contrast checker</h3>
                                <p>Colour contrast is an important part of web accessibility. And one of the easiest things to check for, and get
                                    right.</p>
                                <IconLink link={"https://www.tpgi.com/color-contrast-checker/"} text={"Colour Contrast Checker"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default ValidationTabPane;
