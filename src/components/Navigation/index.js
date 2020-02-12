// import React from 'react';
// const Navigation = () => (
//     <div>
//         <h1>Navigation</h1>
//     </div>
// );
// export default Navigation;

// Test code for SASS files
import React from 'react';
import '../../css/components/_navigation.scss';
const Navigation = ({ links }) => (
    <div className="Navigation">
        <ul>
            {links.map(link => (
                <li key={link.to}>
                    <a href={link.to}>{link.label}</a>
                </li>
            ))}
        </ul>
    </div>
);
export default Navigation;
// end SASS test code
