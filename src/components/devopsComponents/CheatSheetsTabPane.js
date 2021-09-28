import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import CheatSheetsGitTabPane from "./partialTabPanes/CheatSheetsGitTabPane";

const CheatSheetsTabPane = () => {
    return (
        <Tab.Pane eventKey="cheat-sheets-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Cheat sheets</h2>
                    <p className="lead mb-5">
                        A cheat sheet is a concise set of notes used for quick reference. Cheat sheets were historically used by
                        students without an instructor or teacher's knowledge to cheat on a test or exam.
                    </p>
                </div>
            </div>
            <Tab.Container id="tabs-git" defaultActiveKey="git" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="git" className="nav-item nav-link">Git</Nav.Link>
                </Nav>
                <Tab.Content>
                    <CheatSheetsGitTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default CheatSheetsTabPane;
