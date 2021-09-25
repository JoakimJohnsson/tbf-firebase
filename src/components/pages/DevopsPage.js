import React, {useContext, useEffect} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {Tab, Tabs} from "react-bootstrap";

const DevopsPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(true)
    )

    return (
        <>
            <div className="bg-light text-black w-100">
            <div className="container py-5">
            <main className="row no-gutters">
                <div className="col-12">

                    <Tabs defaultActiveKey="validation" id="tabs-tabs" className="mb-3">
                        <Tab eventKey="validation" title="Validation">
                            <h2>Validation</h2>
                        </Tab>
                        <Tab eventKey="cheat-sheets" title="Cheat sheets">
                            <h2>Cheat sheets</h2>
                        </Tab>
                        <Tab eventKey="mdn-links" title="MDN links">
                            <h2>MDN links</h2>
                        </Tab>
                    </Tabs>

                </div>
            </main>
            </div>
            </div>
        </>
    );
}

export default DevopsPage;
