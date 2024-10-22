"use client"
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

// Import compnents
import ContentBox from '../../components/ContentBox';

// Import icons
import { FaUser } from "react-icons/fa";

export default function NewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${warpenFont.className}`}>
            <div className={`relative -top-8 -left-8 w-[102%] bg-black text-white p-6 flex flex-row items-center justify-between`}>
                <div className={`relative z-10 text-4xl font-bold uppercase tracking-widest border-2 bg-neutral-800 border-white px-6 py-4 chamfered-border ${warpenFont.className}`}>
                    <span className="block">TIRUTSAVA</span>
                    <style jsx>{`
                    .chamfered-border {
                        position: relative;
                        display: inline-block;
                        clip-path: polygon(
                            1rem 0%,
                            100% 0%,
                            100% calc(100% - 1.7rem),
                            calc(100% - 1.4rem) 100%,
                            0% 100%,
                            0% 1rem
                        );
                        border: 1px solid white;
                    }
                    .chamfered-border::after {
                        content: '';
                        position: absolute;
                        width: 2.4rem; /* Adjust width for chamfer size */
                        height: 2.4rem; /* Adjust height for chamfer size */
                        background-color: transparent; /* Same as border color */
                        z-index: -1;
                    }
                    .chamfered-border::after {
                        bottom: 0.37rem;
                        right: 0.37rem;
                        border-right: 2px solid white; /* Chamfer border color */
                        transform: rotate(40deg);
                    }
                `}</style>
                </div>
                <ContentBox
                    text={'Adnan Rizvi'}
                    icon={<FaUser />}
                />
            </div>
            <main>{children}</main>
        </div>
    );
}
