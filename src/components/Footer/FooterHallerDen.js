import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FooterHallerDen = () => {
    return (
        <footer className="article w-100 bg-light border-top pt-3 text-center">
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        <p><FontAwesomeIcon icon={['far', 'copyright']}/> 2022 Höll den?</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default FooterHallerDen;
