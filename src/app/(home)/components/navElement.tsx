import Image from "next/image";
import { Advent_Pro } from 'next/font/google';

const adventPro = Advent_Pro({
  weight: ['400', '700'], // Include the desired font weights
  subsets: ['latin'],
});

interface Menuprops {
  Menudata: {
    title: string;
    link: string;
  };
}

export const Menu = ({ Menudata }: Menuprops) => {
  return (
    <div className="relative 2xl:w-[320px] xl:w-[350px] lg:w-[210px] w-[210px] h-[60px] mx-[22px] cursor-pointer">
  <div className="-z-20 w-full h-full absolute scale-110">
    {/* Scale the image to make it bigger */}
    <Image src="/images/comingSoon/navbtn.svg" alt="nav buttons" fill />
  </div>
  <div
    className={`${adventPro.className} flex justify-start items-center xl:text-[22px] lg:text-[17px] font-bold leading-[26.31px] tracking-[0.05em] text-left pl-16 h-full`}
  >
    {Menudata.title}
  </div>
</div>

  );
};
