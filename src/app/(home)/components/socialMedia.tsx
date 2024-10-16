
import Image from "next/image";

interface SocialMediaProps {
  network: string;
  index: number; // Renamed from key to index
}

export const SocialMedia = ({ network, index }: SocialMediaProps) => {
  const link = network === "facebook" ? "https://www.facebook.com" :
               network === "instagram" ? "https://www.instagram.com" :
               network === "x" ? "https://www.x.com" :
               "https://www.youtube.com";

  return (
    <a href={link} className={`lg:w-[165px] lg:h-[165px] w-[140px] h-[140px] relative mx-[-10px]`} style={{ transform: `rotate(${index * 45}deg)` }}>
      <div className="w-full h-full relative">
        <Image src="/images/home/hollow_logo_blue 1.png" alt="image" fill/>
      </div>
      <div className="lg:w-[41px] lg:h-[41px] w-[35px] h-[34px] absolute  top-[31%] left-[40%] -z-10">
        <Image src={`images/socialmedia/${network}.svg`} alt="icon" fill style={{ transform: `rotate(${index * -45}deg)` }}/>
      </div>
    </a>
  );
};
