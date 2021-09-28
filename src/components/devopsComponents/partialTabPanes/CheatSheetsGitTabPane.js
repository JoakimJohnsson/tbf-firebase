import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";

const CheatSheetsGitTabPane = () => {
    return (
        <Tab.Pane eventKey="git">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Git</h2>
                </div>
                <div className="tab-pane-card">
                    <h3>Git by Github</h3>
                    <p>Git is the free and open source distributed version control system that's responsible for
                        everything GitHub related that happens locally on your computer. This cheat sheet features the most
                        important and commonly used Git commands for easy reference.</p>
                    <IconLink link={"https://education.github.com/git-cheat-sheet-education.pdf"} text={"Git cheat sheet from Github"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CheatSheetsGitTabPane;
