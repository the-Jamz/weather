import React from 'react';
import CircularProgress from '../CircularProgress/CircularProgress';
import './ComfortIndex.css';

const ComfortIndex = ({ size, progress, strokeWidth }) => {
    const scale = size / 200;

    return (
        <div className="comfort-index" width={size} height={size}>
            <CircularProgress size={size} progress={progress} strokeWidth={strokeWidth} />
                <div className="centered-content">
                    <img src="/vectors/weather-lines/icons/rain.svg" style={{ transform: `scale(${scale})` }} />
                </div>
            <p className="comfort-text">COMFORT</p>
        </div>
    );
};

export default ComfortIndex;
