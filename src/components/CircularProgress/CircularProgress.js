import React from 'react';
import './CircularProgress.css';

// Circular progress component to display the comfort index
const CircularProgress = ({ size, progress, strokeWidth }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    // Determine the stroke color based on the progress
    const strokeColor = progress < 0 ? "#FF0000" : "#00EC18"; // Red for negative, green for positive

    return (
        <svg width={size} height={size}>
            { /* Circle to display the background of the progress bar */ }
            <circle
                stroke="#D9D9D9"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ transition: 'stroke-dashoffset 3s ease 0s' }}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            { /* Circle to display the progress bar */ }
            <circle
                stroke={strokeColor}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ transition: 'stroke-dashoffset 3s ease 0s', strokeDashoffset: offset }}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
        </svg>
    );
};

export default CircularProgress;
