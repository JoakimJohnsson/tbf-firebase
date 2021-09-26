import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {Nav, Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";

const DevopsPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(true)
    )

    const [heroImage, setHeroImage] = useState(1);
    const updateHeroImage = (number) => {
        setHeroImage(number);
    }

    return (
        <>
            <div className="bg-light text-black w-100">
                <div className={`hero-image hero-image__${heroImage}`}> </div>
                <div className="container py-5">
                    <main className="row no-gutters">
                        <div className="col-12">
                            <Tab.Container id="tabs-validation" defaultActiveKey="validations" className="mb-3">
                                <Nav className="nav-tabs">
                                    <Nav.Link eventKey="validations" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(1)}>Validation</Nav.Link>
                                    <Nav.Link eventKey="cheat-sheets" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(2)}>Cheat sheets</Nav.Link>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="validations">
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
                                                <Nav.Link eventKey="html" className="nav-item nav-link"
                                                          onClick={() => updateHeroImage(1)}>HTML</Nav.Link>
                                                <Nav.Link eventKey="accessibility" className="nav-item nav-link"
                                                          onClick={() => updateHeroImage(4)}>Accessibility</Nav.Link>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="html">
                                                    <div className="row article">
                                                        <div className="col-12 col-md-8">
                                                            <h2>HTML</h2>
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
                                                    <h2>Accessibility</h2>
                                                    fontawesome!
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cheat-sheets">
                                        asdfasdf
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default DevopsPage;
