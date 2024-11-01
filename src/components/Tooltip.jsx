import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Tooltip({ text, position }) {
    const tooltipStyle = {
        position: 'absolute',
        top: position.top,
        left: position.left,
        padding: '8px',
        backgroundColor: 'rgb(29, 98, 194)',
        color: 'white',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 1000,
    };

    return ReactDOM.createPortal(
        <div style={tooltipStyle}>{text}</div>,
        document.getElementById('tooltip-root')
    );
}

export default Tooltip;
