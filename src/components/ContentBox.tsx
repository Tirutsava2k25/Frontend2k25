"use client"
import React from 'react';

interface contentBoxProps {
    text: string;
    icon: React.ReactNode;
    horizontalShift: number;
    verticalShift: number;
}

const contentBox = ({ text, icon, horizontalShift, verticalShift }: contentBoxProps) => {
    const chamferLength = Math.sqrt(horizontalShift**2 + verticalShift**2) + 0.05;
    const chamferAngle = Math.atan(horizontalShift/verticalShift)*180/Math.PI;
    const chamferDisp = ((Math.sqrt(2)*Math.cos(Math.PI/4 - chamferAngle) - 1)*chamferLength/2)-0.08;

    return (
        <div className={`relative z-10 top-4 right-14 text-xl font-bold uppercase tracking-widest border-2 bg-neutral-800 border-white px-5 py-3 chamfered-border`}>
            <span className="flex flex-row gap-4 items-center">{icon} {text}</span>
            <style jsx>{`
                    .chamfered-border {
                        position: relative;
                        display: inline-block;
                        clip-path: polygon(
                            ${horizontalShift}rem 0%,
                            100% 0%,
                            100% calc(100% - ${verticalShift}rem),
                            calc(100% - ${horizontalShift}rem) 100%,
                            0% 100%,
                            0% ${verticalShift}rem
                        );
                        border: 1px solid white;
                    }
                    .chamfered-border::before,
                    .chamfered-border::after {
                        content: '';
                        position: absolute;
                        width: ${chamferLength}rem; /* Adjust width for chamfer size */
                        height: ${chamferLength}rem; /* Adjust height for chamfer size */
                        background-color: transparent; /* Same as border color */
                        z-index: -1;
                    }
                    .chamfered-border::before {
                        top: ${chamferDisp}rem;
                        left: ${chamferDisp}rem;
                        border-left: 2px solid white; /* Chamfer border color */
                        transform: rotate(${chamferAngle}deg);
                    }
                    .chamfered-border::after {
                        bottom: ${chamferDisp}rem;
                        right: ${chamferDisp}rem;
                        border-right: 2px solid white; /* Chamfer border color */
                        transform: rotate(${chamferAngle}deg);
                    }
                `}</style>
        </div>
    )
}

export default contentBox;