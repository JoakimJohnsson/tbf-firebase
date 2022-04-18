import React from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";

const FooterDevOps = () => {
    return (
        <footer className="article w-100 bg-light border-top pt-3 text-center">
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        <CopyrightInformation/>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default FooterDevOps;
