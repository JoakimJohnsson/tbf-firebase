import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {Nav, Tab} from "react-bootstrap";
import CheatSheetsTabPane from "../devopsComponents/CheatSheetsTabPane";
import ResourcesTabPane from "../devopsComponents/ResourcesTabPane";
import AccessibilityTabPane from "../devopsComponents/AccessibilityTabPane";
import UXTabPane from "../devopsComponents/UXTabPane";
import {SetNewDocTitle} from "../microComponents/customHooks";
import CodingTabPane from "../devopsComponents/CodingTabPane";
import WorkflowTabPane from "../devopsComponents/WorkflowTabPane";

const DevopsPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(true)
    )
    SetNewDocTitle("DevOps");
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
                            <Tab.Container id="tabs-validation" defaultActiveKey="accessibility-main" className="mb-3">
                                <Nav className="nav-tabs">
                                    <Nav.Link eventKey="accessibility-main" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(4)}>Accessibility</Nav.Link>
                                    <Nav.Link eventKey="ux-main" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(1)}>User experience</Nav.Link>
                                    <Nav.Link eventKey="coding-main" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(5)}>Programming & coding</Nav.Link>
                                    <Nav.Link eventKey="workflow-main" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(6)}>Workflow</Nav.Link>
                                    <Nav.Link eventKey="cheat-sheets-main" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(2)}>Cheat sheets</Nav.Link>
                                    <Nav.Link eventKey="resources-main" className="nav-item nav-link"
                                              onClick={() => updateHeroImage(3)}>Resources</Nav.Link>
                                </Nav>
                                <Tab.Content>
                                    <AccessibilityTabPane/>
                                    <UXTabPane/>
                                    <CodingTabPane/>
                                    <WorkflowTabPane/>
                                    <CheatSheetsTabPane/>
                                    <ResourcesTabPane/>
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
