import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";

const AccessibilityAccessibilityTabPane = () => {
    return (
        <Tab.Pane eventKey="accessibility">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Accessibility</h2>
                </div>
                <div className="tab-pane-card">
                    <h3>Access monitor</h3>
                    <p>Managed by the Portuguese government, these are sites and tools to support accessibility and usability, to
                        ensure promotion good practices and improve the experience of using digital services.</p>
                    <IconLink link={"https://accessmonitor.acessibilidade.gov.pt/"} text={"Access monitor"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <h3>Colour contrast checker</h3>
                    <p>Colour contrast is an important part of web accessibility. And one of the easiest things to check for, and get
                        right.</p>
                    <IconLink link={"https://www.tpgi.com/color-contrast-checker/"} text={"Colour Contrast Checker"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <h3>axe - Web Accessibility Testing</h3>
                    <p>Find and fix more accessibility issues during website development with axe DevTools. The free axe DevTools
                        browser extension is a fast, lightweight, yet powerful testing tool driven by the
                        world's most trusted accessibility testing engine, axe-core, developed by Deque.</p>
                    <IconLink link={"https://addons.mozilla.org/sv-SE/firefox/addon/axe-devtools/"} text={"Axe - Firefox"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"} text={"Axe - Chrome"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityAccessibilityTabPane;
