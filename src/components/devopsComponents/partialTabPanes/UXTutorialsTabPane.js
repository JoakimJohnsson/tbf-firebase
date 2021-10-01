import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const AccessibilityTutorialsTabPane = () => {
    return (
        <Tab.Pane eventKey="ux-tutorials">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Tutorials</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["graduation-cap"]} />
                    <h3>Basics of UX</h3>
                    <p>This article introduces a workflow that can help teams, products, startups and companies create a robust and meaningful
                        process for developing a better user experience for their customers. You could use different parts of the process
                        separately but they ideally work best as a series of steps.</p>
                    <IconLink link={"https://developers.google.com/web/fundamentals/design-and-ux/ux-basics"} text={"Basics of UX"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityTutorialsTabPane;
