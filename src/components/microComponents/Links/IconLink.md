```js
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserAstronaut, faRobot} from '@fortawesome/free-solid-svg-icons';
library.add(faUserAstronaut, faRobot);

<Router>
    <IconLink className="d-block d-md-inline-block mr-3"/>
    <IconLink className="d-block d-md-inline-block mr-3" icon="robot"/>
    <IconLink className="d-block d-md-inline-block mr-3" icon="robot" text="Welcome to our robot overlords"/>
</Router>
```