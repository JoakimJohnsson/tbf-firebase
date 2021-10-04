import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";
import exWeb01 from "../../../../src/assets/web/exercises/01.pdf";
import exWeb02 from "../../../../src/assets/web/exercises/02.pdf";
import exWeb03 from "../../../../src/assets/web/exercises/03.pdf";
import exWeb04 from "../../../../src/assets/web/exercises/04.pdf";
import exWeb05 from "../../../../src/assets/web/exercises/05.pdf";
import exWeb06 from "../../../../src/assets/web/exercises/06.pdf";
import exWeb07 from "../../../../src/assets/web/exercises/07.pdf";
import exWeb08 from "../../../../src/assets/web/exercises/08.pdf";
import exWeb09 from "../../../../src/assets/web/exercises/09.pdf";
import exWeb10 from "../../../../src/assets/web/exercises/10.pdf";
import exWeb11 from "../../../../src/assets/web/exercises/11.pdf";
import exWeb12 from "../../../../src/assets/web/exercises/12.pdf";
import exWeb13 from "../../../../src/assets/web/exercises/13.pdf";
import slWeb01 from "../../../../src/assets/web/slides/01-Spring_Boot_Crash_Course.pdf";
import slWeb02 from "../../../../src/assets/web/slides/02-Java_Web_Fundamentals.pdf";
import slWeb03 from "../../../../src/assets/web/slides/03-Maven.pdf";
import slWeb04 from "../../../../src/assets/web/slides/04-Spring_Framework.pdf";
import slWeb05 from "../../../../src/assets/web/slides/05-Spring_MVC.pdf";
import slWeb06 from "../../../../src/assets/web/slides/06-Login_and_cookies.pdf";
import slWeb07 from "../../../../src/assets/web/slides/07-Mini_exercises.pdf";
import slWeb08 from "../../../../src/assets/web/slides/08-Java_Web_Jdbc_Hacking.pdf";
import slWeb09 from "../../../../src/assets/web/slides/09-Pagination.pdf";
import slWeb10 from "../../../../src/assets/web/slides/10-Form_Object.pdf";
import slWeb11 from "../../../../src/assets/web/slides/11-Model_Validation.pdf";
import slWeb12 from "../../../../src/assets/web/slides/12-Advanced_Forms.pdf";
import slWeb13 from "../../../../src/assets/web/slides/13-JPA_and_Spring_Data.pdf";


const CodingWebTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-web">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Web / Spring framework exercises</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>01 - Spring boot crash course</h3>
                    <IconLink link={slWeb01} text={"Slide 01"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb01} text={"Exercise 01"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>02 - Java web fundamentals</h3>
                    <IconLink link={slWeb02} text={"Slide 02"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb02} text={"Exercise 02"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>03 - Maven</h3>
                    <IconLink link={slWeb03} text={"Slide 03"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb03} text={"Exercise 03"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>04 - Spring framework</h3>
                    <IconLink link={slWeb04} text={"Slide 04"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb04} text={"Exercise 04"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>05 - Spring MVC</h3>
                    <IconLink link={slWeb05} text={"Slide 05"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb05} text={"Exercise 05"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>06 - Login and cookies</h3>
                    <IconLink link={slWeb06} text={"Slide 06"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb06} text={"Exercise 06"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>07 - Mini exercises</h3>
                    <IconLink link={slWeb07} text={"Slide 07"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb07} text={"Exercise 07"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>08 - JDBC Hacking</h3>
                    <IconLink link={slWeb08} text={"Slide 08"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb08} text={"Exercise 08"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>09 - Pagination</h3>
                    <IconLink link={slWeb09} text={"Slide 09"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb09} text={"Exercise 09"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>10 - Form object</h3>
                    <IconLink link={slWeb10} text={"Slide 10"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb10} text={"Exercise 10"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>11 - Model validation</h3>
                    <IconLink link={slWeb11} text={"Slide 11"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb11} text={"Exercise 11"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>12 - Advanced forms</h3>
                    <IconLink link={slWeb12} text={"Slide 12"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb12} text={"Exercise 12"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["network-wired"]} />
                    <h3>13 - JPA and Spring data</h3>
                    <IconLink link={slWeb13} text={"Slide 13"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exWeb13} text={"Exercise 13"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CodingWebTabPane;
