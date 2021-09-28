import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const ResourcesImagesTabPane = () => {
    return (
        <Tab.Pane eventKey="images">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Free image resources</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["user-astronaut"]} />
                    <h3>NASA Image library</h3>
                    <p>NASA's image library consolidates imagery and videos in one searchable locations. Users can download
                        content in multiple sizes and resolutions.</p>
                    <IconLink link={"https://images.nasa.gov/"} text={"NASA Image library"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["user-astronaut"]} />
                    <h3>The Smithsonian Libraries</h3>
                    <p>The Smithsonian Libraries are a hidden national treasure, where experts come to test and expand knowledge and where
                        America and the world can turn for authentic answers.</p>
                    <IconLink link={"https://library.si.edu/image-gallery"} text={"The Smithsonian Libraries"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default ResourcesImagesTabPane;
