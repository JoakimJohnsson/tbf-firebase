```js
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faCompactDisc, faMusic} from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faCompactDisc, faMusic);

<Router>
    <Navbar className="navbar-footer p-0" bg="dark" variant="dark" expand="true">
        <FooterNavLink link="#" text={"Start"} icon={"home"}/>
        <FooterNavLink link="#" text={"Records"} icon={"compact-disc"}/>
        <FooterNavLink link="#" text={"Tracks"} icon={"music"}/>
    </Navbar>
</Router>
```