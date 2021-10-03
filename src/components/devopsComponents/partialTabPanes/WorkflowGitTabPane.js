import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";

const WorkflowGitTabPane = () => {
    return (
        <Tab.Pane eventKey="workflow-git">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Git</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["code-branch"]}/>
                    <h3>Creating the perfect commit</h3>
                    <p>
                        In this post, we’re talking about what it takes to produce the “perfect” commit.
                    </p>
                    <IconLink link={"https://css-tricks.com/creating-the-perfect-commit-in-git/"} text={"Creating the perfect commit"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={"https://css-tricks.com"} text={"Source: CSS tricks"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default WorkflowGitTabPane;
