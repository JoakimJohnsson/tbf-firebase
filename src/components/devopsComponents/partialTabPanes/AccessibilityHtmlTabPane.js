import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";

const AccessibilityHtmlTabPane = () => {
    return (
        <Tab.Pane eventKey="html">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>HTML validation</h2>
                </div>
                <div className="tab-pane-card">
                    <h3>W3C Validator</h3>
                    <p>The World Wide Web Consortium (W3C) is an international community that develops open
                        standards
                        to ensure the long-term growth of the Web. It is the best resource for validating HTML
                        markup.</p>
                    <IconLink link={"https://validator.w3.org/"} text={"W3C Markup validation service"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityHtmlTabPane;
