import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const ResourcesIconsTabPane = () => {
    return (
        <Tab.Pane eventKey="icons">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Icons and fonts</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["icons"]} />
                    <h3>Fontawesome</h3>
                    <p>An awesome and easy to use library for whenever you need icons for your project.</p>
                    <IconLink link={"https://fontawesome.com"} text={"Fontawesome"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["icons"]} />
                    <h3>Materialize</h3>
                    <p>932 Material Design Icons courtesy of Google..</p>
                    <IconLink link={"https://materializecss.com/icons.html"} text={"Materialize"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["font"]} />
                    <h3>Google fonts</h3>
                    <p>A library of 1,284 free licensed font families and APIs for convenient use via CSS and Android. The library also has
                        delightful and beautifully crafted icons for common actions and items. Download them for use in your digital products
                        for Android, iOS, and web.</p>
                    <IconLink link={"https://fonts.google.com/"} text={"Google fonts"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["font"]} />
                    <h3>DaFont</h3>
                    <p>Top fonts for every project.</p>
                    <IconLink link={"https://www.dafont.com/"} text={"DaFont"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default ResourcesIconsTabPane;
