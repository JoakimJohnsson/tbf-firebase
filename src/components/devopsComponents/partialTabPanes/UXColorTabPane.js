import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const UXColorTabPane = () => {
    return (
        <Tab.Pane eventKey="color">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Color resources and links</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["palette"]} />
                    <h3>Adobe color</h3>
                    <p>This color wheel can be used to generate a color palette.</p>
                    <IconLink link={"https://color.adobe.com/sv/create/color-wheel"} text={"Adobe color"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["swatchbook"]} />
                    <h3>Color hunt</h3>
                    <p>Browse and get inspired by lots of ready-made color palettes.</p>
                    <IconLink link={"https://colorhunt.co/"} text={"Color hunt"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["chalkboard-teacher"]} />
                    <h3>Color theory - wikipedia</h3>
                    <p>Everything you need to know about color theory?</p>
                    <IconLink link={"https://en.wikipedia.org/wiki/Color_theory"} text={"Color theory"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://en.wikipedia.org/"} text={"Source: Wikipedia"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["chalkboard-teacher"]} />
                    <h3>Color theory - hubspot blog</h3>
                    <p>Everything you need to know about color theory?</p>
                    <IconLink link={"https://blog.hubspot.com/marketing/color-theory-design"} text={"Color theory"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://twitter.com/bhopecart"} text={"Source: Bethany Cartwright"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["swatchbook"]} />
                    <h3>Colour contrast checker</h3>
                    <p>Color contrast is an important part of web accessibility. And one of the easiest things to check for, and get
                        right.</p>
                    <IconLink link={"https://www.tpgi.com/color-contrast-checker/"} text={"Colour Contrast Checker"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default UXColorTabPane;
