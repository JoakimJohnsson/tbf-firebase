import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// My components
import Navigation from '../Navigation';

const App = () => (
    <Router>
        <Navigation />
    </Router>
);
export default App;
