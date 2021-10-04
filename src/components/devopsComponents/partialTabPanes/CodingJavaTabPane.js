import React from 'react';
import {Tab} from "react-bootstrap";
import IconLink from "../../microComponents/Links/IconLink";
import TriIcons from "../../microComponents/TriIcons";
import exJava01 from "../../../../src/assets/java/exercises/01.pdf";
import exJava02 from "../../../../src/assets/java/exercises/02.pdf";
import exJava03 from "../../../../src/assets/java/exercises/03.pdf";
import exJava04 from "../../../../src/assets/java/exercises/04.pdf";
import exJava05 from "../../../../src/assets/java/exercises/05.pdf";
import exJava06 from "../../../../src/assets/java/exercises/06.pdf";
import exJava07 from "../../../../src/assets/java/exercises/07.pdf";
import exJava08 from "../../../../src/assets/java/exercises/08.pdf";
import exJava09 from "../../../../src/assets/java/exercises/09.pdf";
import exJava10 from "../../../../src/assets/java/exercises/10.pdf";
import exJava11 from "../../../../src/assets/java/exercises/11.pdf";
import exJava12 from "../../../../src/assets/java/exercises/12.pdf";
import exJava13 from "../../../../src/assets/java/exercises/13.pdf";
import exJava14 from "../../../../src/assets/java/exercises/14.pdf";
import exJava15 from "../../../../src/assets/java/exercises/15.pdf";
import exJava16 from "../../../../src/assets/java/exercises/16.pdf";
import exJava17 from "../../../../src/assets/java/exercises/17.pdf";
import exJava18 from "../../../../src/assets/java/exercises/18.pdf";
import exJava19 from "../../../../src/assets/java/exercises/19.pdf";
import exJava20 from "../../../../src/assets/java/exercises/20.pdf";
import exJava21 from "../../../../src/assets/java/exercises/21.pdf";
import exJava22 from "../../../../src/assets/java/exercises/22.pdf";
import exJava23 from "../../../../src/assets/java/exercises/23.pdf";
import slJava01 from "../../../../src/assets/java/slides/01-Introduction_Java.pdf";
import slJava02 from "../../../../src/assets/java/slides/02-IntelliJ.pdf";
import slJava03 from "../../../../src/assets/java/slides/03-Our_first_application.pdf";
import slJava04 from "../../../../src/assets/java/slides/04-Data_types.pdf";
import slJava05 from "../../../../src/assets/java/slides/05-Operators_and_flowcontrol.pdf";
import slJava06 from "../../../../src/assets/java/slides/06-Switch_statement.pdf";
import slJava07 from "../../../../src/assets/java/slides/07-Arrays_and_loops.pdf";
import slJava08 from "../../../../src/assets/java/slides/08-Text_and_strings.pdf";
import slJava09 from "../../../../src/assets/java/slides/09-DateTime.pdf";
import slJava10 from "../../../../src/assets/java/slides/10-Classes.pdf";
import slJava11 from "../../../../src/assets/java/slides/11-Packages.pdf";
import slJava12 from "../../../../src/assets/java/slides/12-Basic_OO.pdf";
import slJava13 from "../../../../src/assets/java/slides/13-Constructors.pdf";
import slJava14 from "../../../../src/assets/java/slides/14-Getters_and_Setters.pdf";
import slJava15 from "../../../../src/assets/java/slides/15-OO_Design.pdf";
import slJava16 from "../../../../src/assets/java/slides/16-Generic_lists.pdf";
import slJava17 from "../../../../src/assets/java/slides/17-Inheritance.pdf";
import slJava18 from "../../../../src/assets/java/slides/18-Polymorphism.pdf";
import slJava19 from "../../../../src/assets/java/slides/19-Abstract_classes.pdf";
import slJava20 from "../../../../src/assets/java/slides/20-Interfaces.pdf";
import slJava21 from "../../../../src/assets/java/slides/21-Enum.pdf";
import slJava22 from "../../../../src/assets/java/slides/22-Generic_Collections.pdf";
import slJava23 from "../../../../src/assets/java/slides/23-Type_conversion.pdf";

const CodingJavaTabPane = () => {
    return (
        <Tab.Pane eventKey="coding-java">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Java exercises</h2>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>01 - Introduction</h3>
                    <IconLink link={slJava01} text={"Slide 01"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava01} text={"Exercise 01"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>02 - IntelliJ</h3>
                    <IconLink link={slJava02} text={"Slide 02"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava02} text={"Exercise 02"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>03 - Our first application</h3>
                    <IconLink link={slJava03} text={"Slide 03"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava03} text={"Exercise 03"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>04 - Data types</h3>
                    <IconLink link={slJava04} text={"Slide 04"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava04} text={"Exercise 04"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>05 - Operators and flow control</h3>
                    <IconLink link={slJava05} text={"Slide 05"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava05} text={"Exercise 05"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>06 - Switch statement</h3>
                    <IconLink link={slJava06} text={"Slide 06"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava06} text={"Exercise 06"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>07 - Arrays and loops</h3>
                    <IconLink link={slJava07} text={"Slide 07"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava07} text={"Exercise 07"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>08 - Text and strings</h3>
                    <IconLink link={slJava08} text={"Slide 08"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava08} text={"Exercise 08"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>09 - DateTime</h3>
                    <IconLink link={slJava09} text={"Slide 09"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava09} text={"Exercise 09"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>10 - Classes</h3>
                    <IconLink link={slJava10} text={"Slide 10"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava10} text={"Exercise 10"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>11 - Packages</h3>
                    <IconLink link={slJava11} text={"Slide 11"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava11} text={"Exercise 11"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>12 - Object oriented programming</h3>
                    <IconLink link={slJava12} text={"Slide 12"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava12} text={"Exercise 12"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>13 - Constructors</h3>
                    <IconLink link={slJava13} text={"Slide 13"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava13} text={"Exercise 13"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>14 - Getters and setters</h3>
                    <IconLink link={slJava14} text={"Slide 14"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava14} text={"Exercise 14"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>15 - OO design</h3>
                    <IconLink link={slJava15} text={"Slide 15"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava15} text={"Exercise 15"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>16 - Generic lists</h3>
                    <IconLink link={slJava16} text={"Slide 16"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava16} text={"Exercise 16"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>17 - Inheritance</h3>
                    <IconLink link={slJava17} text={"Slide 17"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava17} text={"Exercise 17"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>18 - Polymorphism</h3>
                    <IconLink link={slJava18} text={"Slide 18"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava18} text={"Exercise 18"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>19 - Abstract classes</h3>
                    <IconLink link={slJava19} text={"Slide 19"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava19} text={"Exercise 19"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>20 - Interfaces</h3>
                    <IconLink link={slJava20} text={"Slide 20"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava20} text={"Exercise 20"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>21 - Enum</h3>
                    <IconLink link={slJava21} text={"Slide 21"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava21} text={"Exercise 21"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>22 - Generic collections</h3>
                    <IconLink link={slJava22} text={"Slide 22"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava22} text={"Exercise 22"}
                              icon={"external-link-alt"} external={true}/>
                </div>
                <div className="tab-pane-card">
                    <TriIcons icons={["laptop-code"]} />
                    <h3>23 - Type conversion</h3>
                    <IconLink link={slJava23} text={"Slide 23"}
                              icon={"external-link-alt"} external={true}/>
                    <IconLink link={exJava23} text={"Exercise 23"}
                              icon={"external-link-alt"} external={true}/>
                </div>
            </div>
        </Tab.Pane>
    );
}

export default CodingJavaTabPane;
