import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const AccessibilityTutorialsTabPane = () => {
    return (
        <Tab.Pane eventKey="tutorials">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Tutorials</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["user-astronaut"]} />
                    <h3>W3C Tutorials</h3>
                    <p>This collection of tutorials shows you how to develop web content that is accessible to people with disabilities,
                        and that provides a better user experience for everyone.</p>
                    <IconLink link={"https://www.w3.org/WAI/tutorials/"} text={"W3C Tutorials"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://www.w3.org/"} text={"Source: W3C - The Word wide web consortium"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["tv"]} />
                    <h3>A11ycasts</h3>
                    <p>A series of easy going YouTube videos made by the Google Chrome Developers team.</p>
                    <IconLink link={"https://www.youtube.com/watch?v=HtTyRajRuyY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"}
                              text={"A11ycasts"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["graduation-cap"]} />
                    <h3>WAI-ARIA Basics</h3>
                    <p>Solve accessibility problems by adding in further semantics that browsers and assistive
                        technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level
                        to improve accessibility.</p>
                    <IconLink link={"https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics"}
                              text={"WAI_ARIA Basics"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://developer.mozilla.org/"} text={"Source: MDN Web Docs (Mozilla Developer Network)"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["graduation-cap"]} />
                    <h3>Learn accessible web development</h3>
                    <p>It's important to learn how to use web technologies responsibly so that all readers might use your creations on the web. To
                        help you achieve this, this module will cover general best practices (which are demonstrated throughout the HTML, CSS, and
                        JavaScript topics), cross browser testing, and some tips on enforcing accessibility from the start. We'll cover accessibility
                        in special detail.</p>
                    <IconLink link={"https://developer.mozilla.org/en-US/docs/Learn/Accessibility"}
                              text={"Accessible web development"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://developer.mozilla.org/"} text={"Source: MDN Web Docs (Mozilla Developer Network)"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityTutorialsTabPane;
