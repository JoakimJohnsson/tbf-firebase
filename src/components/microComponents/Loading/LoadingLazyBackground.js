import React from 'react';
import {colorRandomizer} from "../microComponentsHelper";

const LoadingLazyBackground = () => {
    return (
        <div className="w-100 h-100 p-3">
            <div className={`loading-component opacity-1 mb-3 bg-color-variant__${colorRandomizer().toString()}`}>
                <div className="sr-only">
                    Loading components
                </div>
            </div>
        </div>
    )
};

export default LoadingLazyBackground;
