import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";

const CheatSheetsTabPane = () => {
    return (
        <Tab.Pane eventKey="cheat-sheets-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Cheat sheets</h2>
                    <p className="lead">A cheat sheet is a concise set of notes used for quick reference. Cheat sheets were historically used by
                        students without an instructor or teacher's knowledge to cheat on a test or exam.</p>
                </div>
            </div>
            <Tab.Container id="tabs-git" defaultActiveKey="git" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="git" className="nav-item nav-link">Git</Nav.Link>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="git">
                        <div className="row article">
                            <div className="col-12">
                                <h2>Git</h2>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-4">
                                <h3>Git by Github</h3>
                                <p>Git is the free and open source distributed version control system that's responsible for
                                    everything GitHub related that happens locally on your computer. This cheat sheet features the most
                                    important and commonly used Git commands for easy reference.</p>
                                <IconLink link={"https://education.github.com/git-cheat-sheet-education.pdf"} text={"Git cheat sheet from Github"}
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
    );
}

export default CheatSheetsTabPane;
