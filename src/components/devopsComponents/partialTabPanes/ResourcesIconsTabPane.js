import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";

const ResourcesIconsTabPane = () => {
    return (
        <Tab.Pane eventKey="icons">
            <div className="row article">
                <div className="col-12 mb-2">
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
    );
}

export default ResourcesIconsTabPane;
