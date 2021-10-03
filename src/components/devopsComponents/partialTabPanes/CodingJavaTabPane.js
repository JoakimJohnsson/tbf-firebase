import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";
import exJava01 from "../../../../src/assets/java/exercises/01.pdf";
import slJava01 from "../../../../src/assets/java/slides/01-Introduction_Java.pdf";

const CodingJavaTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-java">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Java exercises</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["palette"]} />
                    <h3>01 - Introduction</h3>
                    <IconLink link={slJava01} text={"Slide 01"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava01} text={"Exercise 01"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CodingJavaTabPane;
