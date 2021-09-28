import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const AccessibilityTutorialsTabPane = () => {
    return (
        <Tab.Pane eventKey="documentation">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Documentation</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["low-vision"]} />
                    <h3>Web Content Accessibility Guidelines (WCAG)</h3>
                    <p>Web Content Accessibility Guidelines (WCAG) is developed through the W3C process in cooperation with
                        individuals and organizations around the world, with a goal of providing a single shared standard for web
                        content accessibility that meets the needs of individuals, organizations, and governments internationally.</p>
                    <IconLink link={"https://www.w3.org/WAI/standards-guidelines/wcag/"} text={"WCAG Documentation"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["sign-language"]} />
                    <h3>Accessible Rich Internet Applications (WAI-ARIA)</h3>
                    <p>Accessibility of web content requires semantic information about widgets, structures, and behaviors, in order
                        to allow assistive technologies to convey appropriate information to persons with disabilities. This
                        specification provides an ontology of roles, states, and properties that define accessible user interface
                        elements and can be used to improve the accessibility and interoperability of web content and applications. </p>
                    <IconLink link={"https://www.w3.org/TR/wai-aria-1.1/"} text={"WAI-ARIA Documentation"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityTutorialsTabPane;
