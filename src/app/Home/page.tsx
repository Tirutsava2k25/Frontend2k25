import Image from "next/image";
import { Menu } from "./components/navElement";
import Link from "next/link";
import { SocialMedia } from "./components/socialMedia";

export default function Home() {
    const menudata=[
        {
            title:"Tickets & Plans",
            link:"/comming soon",
        },
        {
            title:"Workshops",
            link:"/comming soon",
        },
        {
            title:"Events & Competition",
            link:"/comming soon",
        },
        {
            title:"Merchandise",
            link:"/comming soon",
        },

    ]

  return (
    <div className="">
        <div className="flex flex-shrink">
            <div className="mr-auto">
                <nav className="flex flex-shrink flex-1 mt-7 mr-auto">
                    {menudata.map((item,i)=><Menu key={i} Menudata={item}/>)}
                    
                </nav>
                <div className="flex">
                    <div className="w-[446px] h-[126px] ml-10 mt-5 flex justify-center items-center  relative">
                        <Image src="/images/home/tirutsava_logo_blue 1.png" alt="Tirutsava Logo" width={94} height={87} className="absolute left-0"/>
                        <Image src="/images/home/blue_name_logo 1.png" alt="Tirutsava Logo" width={246} height={126} className="absolute left-[64px]"/>
                        <Image src="/images/home/2025_logo.png" alt="logo" width={159} height={98} className="absolute right-0"/>
                    </div>
                </div>
            </div>
            <div className="w-[165px] h-[165px] relative">
                <div className="w-[165px] h-[165px]">
                        <Image src="/images/home/hollow_logo_blue 1.png" alt="image" fill/>
                </div>
                <div className="w-[29px] h-[30px] absolute top-[57px] left-[72px]">
                        <svg width="29" height="30" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.06908 19.375C6.09616 18.5625 7.24408 17.9219 8.51283 17.4531C9.78158 16.9844 11.1107 16.75 12.5003 16.75C13.8899 16.75 15.2191 16.9844 16.4878 17.4531C17.7566 17.9219 18.9045 18.5625 19.9316 19.375C20.6364 18.5208 21.1852 17.5521 21.5779 16.4688C21.9706 15.3854 22.167 14.2292 22.167 13C22.167 10.2292 21.2255 7.86979 19.3425 5.92188C17.4595 3.97396 15.1788 3 12.5003 3C9.82185 3 7.54112 3.97396 5.65814 5.92188C3.77515 7.86979 2.83366 10.2292 2.83366 13C2.83366 14.2292 3.03001 15.3854 3.42272 16.4688C3.81543 17.5521 4.36421 18.5208 5.06908 19.375ZM12.5003 14.25C11.3121 14.25 10.3102 13.8281 9.4946 12.9844C8.67897 12.1406 8.27116 11.1042 8.27116 9.875C8.27116 8.64583 8.67897 7.60938 9.4946 6.76563C10.3102 5.92188 11.3121 5.5 12.5003 5.5C13.6885 5.5 14.6904 5.92188 15.5061 6.76563C16.3217 7.60938 16.7295 8.64583 16.7295 9.875C16.7295 11.1042 16.3217 12.1406 15.5061 12.9844C14.6904 13.8281 13.6885 14.25 12.5003 14.25ZM12.5003 25.5C10.8288 25.5 9.25797 25.1719 7.78783 24.5156C6.31769 23.8594 5.03887 22.9688 3.95137 21.8438C2.86387 20.7188 2.00293 19.3958 1.36855 17.875C0.73418 16.3542 0.416992 14.7292 0.416992 13C0.416992 11.2708 0.73418 9.64583 1.36855 8.125C2.00293 6.60417 2.86387 5.28125 3.95137 4.15625C5.03887 3.03125 6.31769 2.14063 7.78783 1.48438C9.25797 0.828125 10.8288 0.5 12.5003 0.5C14.1719 0.5 15.7427 0.828125 17.2128 1.48438C18.683 2.14063 19.9618 3.03125 21.0493 4.15625C22.1368 5.28125 22.9977 6.60417 23.6321 8.125C24.2665 9.64583 24.5837 11.2708 24.5837 13C24.5837 14.7292 24.2665 16.3542 23.6321 17.875C22.9977 19.3958 22.1368 20.7188 21.0493 21.8438C19.9618 22.9688 18.683 23.8594 17.2128 24.5156C15.7427 25.1719 14.1719 25.5 12.5003 25.5Z" fill="#68C6EA"/>
                        </svg>
                </div>
            </div>   
        </div>
        <div className="flex flex-col min-h-[655px] items-center">
            <div className="-z-20 w-[665px] h-[570px] absolute top-[132px]">
                <Image src="/images/home/image 8.png" alt="Circle_Glow" fill/>
            </div>
            <div className="-z-10 w-[592px] h-[655px] absolute top-[288px]  ">
                <Image src="/images/home/main.png" alt="Samurai" fill />
                {/* <Image src="/reflection.png" alt="Circle_Glow" width={586} height={652} className="absolute bottom-0"/> */}
            </div>
        </div>
        <div className="fixed bottom-0 w-full flex items-center ">
            <div className="flex mr-auto">
                <Menu Menudata={{title:"Tickets & Plans",link:"/comming soon",}}/>
                <Menu Menudata={{title:"Tickets & Plans",link:"/comming soon",}}/>
            </div>
            <div className="flex">
                <SocialMedia network="facebook" index={0} />
                <SocialMedia network="instagram" index={1}/>
                <SocialMedia network="x" index={2}/>
                <SocialMedia network="youtube" index={3}/>
            </div>
        </div>
    </div>
  );
}
