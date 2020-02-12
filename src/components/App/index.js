// import React from 'react';
// const App = () => (
//     <div>
//         <h1>App</h1>
//     </div>
// );
// export default App;

// Test code for SASS files
import React, { Component } from 'react';
import Navigation from '../Navigation';
const LINKS = [
    { label: 'Website', to: 'https://www.robinwieruch.de/' },
    { label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];
class App extends Component {
    render() {
        return (
            <div>
                <Navigation links={LINKS} />
            </div>
        );
    }
}
export default App;
// end SASS test code