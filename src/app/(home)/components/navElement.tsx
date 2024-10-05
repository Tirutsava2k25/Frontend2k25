import Image from "next/image";

import { Advent_Pro } from 'next/font/google';

const adventPro = Advent_Pro({
  weight: ['400', '700'], // Include the desired font weights
  subsets: ['latin'],
});

interface Menuprops{
    Menudata:{
        title:string;
        link:string;

    }
}

export const Menu=({Menudata}:Menuprops)=>{
  return (
    <div className="2xl:w-[282px] xl:w-[230px] lg:w-[180px] w-[150px] h-[50px] border-2 mx-[22px] cursor-pointer">
        <div className={`${adventPro.className} xl:text-[22px] lg:text[17px]  font-bold leading-[26.31px] tracking-[0.05em] text-left `}>
            {Menudata.title}
        </div>
    </div>
  );
}
