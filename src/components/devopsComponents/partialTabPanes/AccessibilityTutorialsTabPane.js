import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";

const AccessibilityTutorialsTabPane = () => {
    return (
        <Tab.Pane eventKey="tutorials">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Tutorials</h2>
                </div>
                <div className="tab-pane-card">
                    <h3>W3C Tutorials</h3>
                    <p>This collection of tutorials shows you how to develop web content that is accessible to people with disabilities,
                        and that provides a better user experience for everyone.</p>
                    <IconLink link={"https://www.w3.org/WAI/tutorials/"} text={"W3C Tutorials"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <h3>A11ycasts</h3>
                    <p>A series of easy going YouTube videos made by the Google Chrome Developers team.</p>
                    <IconLink link={"https://www.youtube.com/watch?v=HtTyRajRuyY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"}
                              text={"A11ycasts"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default AccessibilityTutorialsTabPane;
