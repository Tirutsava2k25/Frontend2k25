export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white font-sans flex flex-col justify-between p-[5vh_5vw] relative">
      
      {/* Three Sections at the Top */}
      <div className="flex justify-between gap-6 mb-[6vh] flex-wrap">
        {/* Section 1 */}
        <div className="bg-[#1e1e1e] p-6 md:p-8 flex-[1] text-center rounded-lg min-w-[20%]">
          <h2 className="text-sm md:text-xl font-semibold">Section 1</h2>
          <p className="text-xs md:text-base">This is the first section.</p>
        </div>
        {/* Section 2 (Main Head Section) */}
        <div className="bg-[#1e1e1e] p-6 md:p-8 flex-[2] text-center rounded-lg">
          <h2 className="text-base md:text-2xl font-semibold">Section 2</h2>
          <p className="text-sm md:text-lg">This is the second section (center).</p>
        </div>
        {/* Section 3 */}
        <div className="bg-[#1e1e1e] p-6 md:p-8 flex-[1] text-center rounded-lg min-w-[20%]">
          <h2 className="text-sm md:text-xl font-semibold">Section 3</h2>
          <p className="text-xs md:text-base">This is the third section.</p>
        </div>
      </div>

      {/* Middle Section with Circle and Name */}
      <div className="flex justify-between items-center mb-[8vh] gap-6">
        {/* Circle */}
        <div className="flex justify-center items-center flex-shrink-0">
          <div className="relative w-[20vw] md:w-[18vw] h-[20vw] md:h-[18vw] bg-[#ff9900] rounded-full flex justify-center items-center">
            <div className="w-[60%] h-[60%] bg-black rounded-full border-4 border-[#00e0ff]"></div>
          </div>
        </div>
        {/* Name and Title */}
        <div className="text-center text-[#00e0ff] flex-1">
          <h2 className="text-xl md:text-3xl font-bold">KUSHAL GOYAL</h2>
          <h3 className="text-base md:text-xl text-[#00ff00] mb-[1vh]">FEST HEAD</h3>
          <div className="bg-[#ff9900] w-[80%] h-[2px] my-[1vh] mx-auto"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-end items-center pr-0 md:pr-40 mb-[5vh]">
        <div className="bg-[rgba(0,255,0,0.2)] p-4 rounded-lg text-lg md:text-2xl text-white w-full max-w-[80vw] md:max-w-[40vw] text-center">
          PUBLIC RELATIONS & OUTREACH
        </div>
      </div>
    </div>
  );
}
