import React from "react";
import {CopyrightInformation} from "../../MicroComponents/MicroComponents";

const StartPageSecondaryColumn = () => {
    return (
        <div className="standard-secondary-column">
            <div className="standard-box-wrapper__near-dark mb-5">
                <h1>The Baseball Field & Friends</h1>
                <p>The music scene in Nyköping has delivered great music since the early 90's. </p>
                <p>This website, former home of band <b>The Baseball Field</b> and music labels <b>Vanishing Vanity Music</b> and <b>Strandad
                    Sjöbuse Records</b>, now brings you that good old music in a modern way.</p>
                <h2>Extra content</h2>
                <h3>Links</h3>
                <p><a href="https://thebaseballfield.se/old/">The old TBF/VVM site</a></p>
                <h3>Video</h3>
                <p>T.B.A</p>
                <CopyrightInformation className={"d-none d-lg-block"}/>
            </div>
        </div>
    )
}

export default StartPageSecondaryColumn
