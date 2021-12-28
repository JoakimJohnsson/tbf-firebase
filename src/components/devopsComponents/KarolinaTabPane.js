import React from 'react';
import {Nav, Tab} from "react-bootstrap";
import KarolinaBirthdayTabPane from "./partialTabPanes/KarolinaBirthdayTabPane";

const KarolinaTabPane = () => {
    return (
        <Tab.Pane eventKey="karolina-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Karolina</h2>
                    <p className="lead mb-5">
                        Personalized tasks and experiences for Karolina Bladh.
                    </p>
                </div>
            </div>
            <Tab.Container id="resources-main-tabs" defaultActiveKey="birthday" className="mb-3">
                <Nav className="nav-tabs nav-tabs__secondary">
                    <Nav.Link eventKey="disabled" className="nav-item nav-link disabled">Karolina</Nav.Link>
                    <Nav.Link eventKey="birthday" className="nav-item nav-link">Happy birthday!</Nav.Link>
                </Nav>
                <Tab.Content>
                    <KarolinaBirthdayTabPane/>
                </Tab.Content>
            </Tab.Container>
        </Tab.Pane>
    );
}

export default KarolinaTabPane;
