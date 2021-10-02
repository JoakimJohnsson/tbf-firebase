import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const CodingJavaTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-java">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Java</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["palette"]} />
                    <h3>Java exercises</h3>
                    <p>Do them</p>
                    <IconLink link={"https://color.adobe.com/sv/create/color-wheel"} text={"Adobe color"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CodingJavaTabPane;
