import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../microComponents/Links/IconLink";
import TriIcons from "../microComponents/TriIcons";

const GuidesTabPane = () => {
    return (
        <Tab.Pane eventKey="guides-main">
            <div className="row article">
                <div className="col-12 col-md-8">
                    <h2>Guides</h2>
                    <p className="lead mb-5">
                        Miscellaneous tutorials and guides.
                    </p>
                </div>
                <div className="row no-gutters">
                    <div className="tab-pane-card">
                        <TriIcons icons={["vr-cardboard"]}/>
                        <h3>Bootstrap flex</h3>
                        <p>
                            Flex utility can be used to manage the layout, alignment, grid columns, navigation and other components
                            of the page. It makes easy to design layout structure without using float or positioning.
                        </p>
                        <IconLink link={"https://www.tutorialspoint.com/bootstrap4/bootstrap4_flex.htm"} text={"Bootstrap flex"}
                                  icon={"external-link-alt"} external={true}/>
                        <IconLink link={"https://www.tutorialspoint.com"} text={"Source: Tutorialspoint"}
                                  icon={"external-link-alt"} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={["user-astronaut"]}/>
                        <h3>Complete guide to flexbox</h3>
                        <p>
                            Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox,
                            focusing on all the different possible properties for the parent element (the flex container) and the child
                            elements (the flex items).
                        </p>
                        <IconLink link={"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"} text={"Complete guide to flexbox"}
                                  icon={"external-link-alt"} external={true}/>
                        <IconLink link={"https://css-tricks.com/"} text={"Source: CSS Tricks"}
                                  icon={"external-link-alt"} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={["robot"]}/>
                        <h3>CSS snippets and guides</h3>
                        <p>
                            A plethora of useful tricks, snippets and guides for almost everything a front-end developer might need.
                        </p>
                        <IconLink link={"https://css-tricks.com/snippets/"} text={"Snippets"}
                                  icon={"external-link-alt"} external={true}/>
                        <IconLink link={"https://css-tricks.com/"} text={"Source: CSS Tricks"}
                                  icon={"external-link-alt"} external={true}/>
                    </div>
                    <div className="tab-pane-card">
                        <TriIcons icons={["robot"]}/>
                        <h3>Debugging CSS</h3>
                        <p>
                            Debugging in CSS means figuring out what might be the problem when you have unexpected layout results. We'll
                            look at a few categories bugs often fit into, see how we can evaluate the situation, and explore techniques
                            that help prevent these bugs.
                        </p>
                        <IconLink link={"https://www.smashingmagazine.com/2021/10/guide-debugging-css/"} text={"Snippets"}
                                  icon={"external-link-alt"} external={true}/>
                        <IconLink link={"https://www.smashingmagazine.com"} text={"Source: Smashing magazine"}
                                  icon={"external-link-alt"} external={true}/>
                    </div>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default GuidesTabPane;
