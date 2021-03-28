import React from 'react';

const LoadingLazyBackground = () => {
    let rand2 = Math.floor(Math.random() * 8) + 1;
    return (
        <div className="w-100 h-100 p-3">
            <div className={`loading-component opacity-1 mb-3 bg-color-variant__${rand2.toString()}`}>
                <div className="sr-only">
                    Loading components
                </div>
            </div>
        </div>
    )
};

export default LoadingLazyBackground;
