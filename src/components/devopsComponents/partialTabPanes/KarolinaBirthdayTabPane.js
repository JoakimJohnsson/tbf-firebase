import React, {useState} from 'react';
import {Tab} from "react-bootstrap";
import birthday2021 from "../../../images/birthday2021.jpg";
import birthday2020 from "../../../images/im4.jpg";

const KarolinaBirthdayTabPane = () => {
    const [birthdayImage, setBirthdayImage] = useState(birthday2020);

    const toggleBirthdayImage = () => {
        if (birthdayImage === birthday2020) {
            setBirthdayImage(birthday2021);
        } else {
            setBirthdayImage(birthday2020);
        }
    }

    return (
        <Tab.Pane eventKey="birthday">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2 className="mb-5">Happy birthday!</h2>

                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-8 d-flex justify-content-center align-items-center flex-column">

                            <img src={birthdayImage} className="birthday-image mb-3" alt="birthday reveal"/>

                            <button className="btn btn-secondary " onClick={toggleBirthdayImage}>Click me to reveal your gift!</button>


                        </div>
                    </div>


                    {/*Insert happy birthday component here*/}

                </div>
            </div>
        </Tab.Pane>
    );
}

export default KarolinaBirthdayTabPane;
