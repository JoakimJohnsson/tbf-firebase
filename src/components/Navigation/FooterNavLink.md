```js
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faCompactDisc, faMusic} from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faCompactDisc, faMusic);

<Router>
    <FooterNavLink link="#" text={"Start"} icon={"home"}/>
</Router>
```