import Image from "next/image";

import { Bebas_Neue } from 'next/font/google';
const bebasNeue = Bebas_Neue({
  weight: ['400'], // Bebas Neue typically only supports 400 weight
  subsets: ['latin'],
});

const Comingsoon=()=>{
    return(
        <div className="bg-ComingSoon-bg bg-cover bg-center h-screen">
            <div className="flex h-[114px] items-center ">
                <div className={`${bebasNeue.className} text-4xl font-normal leading-[57.6px] text-left mr-auto ml-12 cursor-pointer`}>
                    TIRUTSAVA
                </div>
                <div className="mr-9 cursor-pointer">
                    <Image src = "/images/comingSoon/tirutsava_full 1.png" alt ="" height={53.79} width={50} />
                </div>
            </div>
            <div className="flex items-center justify-center h-3/5 mx-2">
                <Image src = "/images/comingSoon/THE FUTURE AWAITS.png" alt="" width={806} height={238}/>
            </div>
            <div className="flex flex-col xs:flex-row w-full xs:w-auto xs:h-[67px] h-[134px] items-center fixed bottom-[0px] left-[0px] xs:ml-12 xs:mb-10">
                <div className={`${bebasNeue.className} xs:w-[178px] w-full h-full border border-white flex items-center justify-center text-2xl font-normal leading-[38.4px] text-left`}>
                    <a href="https://2023.tirutsava.com" target="_blank" rel="noopener noreferrer">
                    Tirutsava 2k23
                    </a>
                </div>
                <div className="flex items-center justify-evenly xs:w-[262px] w-full h-full border border-white cursor-pointer">
                    <div><Image src = "/images/comingSoon/TwitterX.png" height={30} width={30} alt = ""/></div>
                    <div><Image src = "/images/comingSoon/Facebook.png" height={30} width={30} alt = ""/></div>
                    <div><Image src = "/images/comingSoon/Instagram.png" height={30} width={30} alt = ""/></div>
                    <div><Image src = "/images/comingSoon/LinkedIn.png" height={30} width={30} alt = ""/></div>
                </div>
            </div>
        </div>
    )
}

export default Comingsoon;