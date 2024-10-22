"use client"
import React from 'react';

interface contentBoxProps {
    text: string;
    icon: React.ReactNode;
}

const contentBox = ({ text, icon }: contentBoxProps) => {
    return (
        <div className={`relative z-10 top-4 right-14 text-xl font-bold uppercase tracking-widest border-2 bg-neutral-800 border-white px-5 py-4 chamfered-border`}>
            <span className="flex flex-row gap-4">{icon} {text}</span>
            <style jsx>{`
                    .chamfered-border {
                        position: relative;
                        display: inline-block;
                        clip-path: polygon(
                            1.4rem 0%,
                            100% 0%,
                            100% calc(100% - 1.7rem),
                            calc(100% - 1.4rem) 100%,
                            0% 100%,
                            0% 1.7rem
                        );
                        border: 1px solid white;
                    }
                    .chamfered-border::before,
                    .chamfered-border::after {
                        content: '';
                        position: absolute;
                        width: 2.4rem; /* Adjust width for chamfer size */
                        height: 2.4rem; /* Adjust height for chamfer size */
                        background-color: transparent; /* Same as border color */
                        z-index: -1;
                    }
                    .chamfered-border::before {
                        top: 0.37rem;
                        left: 0.37rem;
                        border-left: 2px solid white; /* Chamfer border color */
                        transform: rotate(40deg);
                    }
                    .chamfered-border::after {
                        bottom: 0.37rem;
                        right: 0.37rem;
                        border-right: 2px solid white; /* Chamfer border color */
                        transform: rotate(40deg);
                    }
                `}</style>
        </div>
    )
}

export default contentBox;