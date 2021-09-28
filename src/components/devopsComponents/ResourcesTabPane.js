import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";

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
                    {/*<Nav.Link eventKey="css-pre-processors" className="nav-item nav-link">css</Nav.Link>*/}
                    {/*<Nav.Link eventKey="snippets" className="nav-item nav-link">Snippets</Nav.Link>*/}
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="icons">
                        <div className="row article">
                            <div className="col-12">
                                <h2>Icons</h2>
                            </div>
                            <div className="tab-pane-card">
                                <h3>Fontawesome</h3>
                                <p>An awesome and easy to use library for whenever you need icons for your project.</p>
                                <IconLink link={"https://fontawesome.com"} text={"Fontawesome"}
                                          icon={"external-link-alt"} external={true}/>
                            </div>
                        </div>
                    </Tab.Pane>
                    {/*<Tab.Pane eventKey="css-pre-processors">*/}
                    {/*    <h2>Accessibility</h2>*/}
                    {/*    fontawesome!*/}
                    {/*</Tab.Pane>*/}
                    {/*<Tab.Pane eventKey="snippets">*/}
                    {/*    <h2>Accessibility</h2>*/}
                    {/*    fontawesome!*/}
                    {/*</Tab.Pane>*/}
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default ResourcesTabPane;
