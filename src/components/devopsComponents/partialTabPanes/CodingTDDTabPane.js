import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";
import exTDD01 from "../../../../src/assets/tdd/exercises/01.pdf";
import exTDD02 from "../../../../src/assets/tdd/exercises/02.pdf";
import exTDD03 from "../../../../src/assets/tdd/exercises/03.pdf";
import slTDD01 from "../../../../src/assets/tdd/slides/01-Intro_to_TDD.pdf";
import slTDD02 from "../../../../src/assets/tdd/slides/02-TDD_Big_picture.pdf";
import slTDD03 from "../../../../src/assets/tdd/slides/03-Basic_unit_testing.pdf";

const CodingTDDTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-tdd">
            <div className="row article">nav-tabs
                <div className="col-12 mb-2">
                    <h2>TDD (Test driven development) exercises</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["server"]} />
                    <h3>01 - Introduction to TDD</h3>
                    <IconLink link={slTDD01} text={"Slide 01"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exTDD01} text={"Exercise 01"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["server"]} />
                    <h3>02 - TDD - The big picture</h3>
                    <IconLink link={slTDD02} text={"Slide 02"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exTDD02} text={"Exercise 02"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["server"]} />
                    <h3>03 - Basic unit testing</h3>
                    <IconLink link={slTDD03} text={"Slide 03"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exTDD03} text={"Exercise 03"}
                              icon={"external-link-alt"} external={true}/>
                </div>

            </div>
        </Tab.Pane>
    );
}

export default CodingTDDTabPane;
