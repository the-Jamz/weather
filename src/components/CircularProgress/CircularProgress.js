import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ size, progress, strokeWidth }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference

    return (
    <svg width={size} height={size}>
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
      <circle
        stroke="#00EC18" // Stroke color for the progress
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ transition: 'stroke-dashoffset 3s ease 0s', strokeDashoffset: offset }}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Add more elements here if you need to */}
    </svg>
    );
};

export default CircularProgress;
