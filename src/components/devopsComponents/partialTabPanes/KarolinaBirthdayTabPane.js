import React from 'react';
import {Tab} from "react-bootstrap";

const KarolinaBirthdayTabPane = () => {
    return (
        <Tab.Pane eventKey="birthday">
            <div className="row article">
                <div className="col-12 mb-2">
                    <h2>Happy birthday!</h2>

                    {/*Insert happy birthday component here*/}

                </div>
            </div>
        </Tab.Pane>
    );
}

export default KarolinaBirthdayTabPane;
