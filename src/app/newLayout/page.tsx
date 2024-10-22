"use client";
import React from 'react';
import localFont from 'next/font/local';

// Font Imports
const warpenFont = localFont({
    src: [{
        path: '../fonts/warpen/Warpen.otf',
        weight: '400',
        style: 'normal'
    }, {
        path: '../fonts/warpen/Warpen.ttf',
        weight: '400',
        style: 'normal'
    }],
    variable: '--font-warpen',
})

const newLayout: React.FC = () => {
    return (
        <div className="flex items-center justify-between">
            This is someting
        </div>
    )
}

export default newLayout;