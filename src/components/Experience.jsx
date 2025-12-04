export const Experience = () => {
  return (
    <div className="w-full bg-[#111827] flex flex-col items-center px-6 pt-24 gap-12
      max-sm:px-4 max-sm:pt-16">

      {/* TOP TEXT */}
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <button className="bg-[#374151] w-[105px] h-7 rounded-xl text-white">
          Experience
        </button>
        <div className="text-white">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>

      {/* CARD 1 */}
      <div className="w-[832px] bg-[#1F2937] rounded-xl p-8 flex justify-between 
        items-center gap-6
        max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:p-4">

        <img src="logo-upwork.png" className="w-[120px] max-sm:w-[80px]" />

        <div className="flex flex-col gap-4 text-white max-sm:items-center">
          <div className="text-2xl font-semibold">Sr. Frontend Developer</div>
          <div className="flex flex-col gap-1 text-gray-300 text-sm max-sm:text-center">
            <div>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>• Ut pretium arcu et massa semper.</div>
            <div>• Sed quis justo ac magna.</div>
            <div>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>

        <div className="text-gray-400 text-sm max-sm:mt-2">
          Nov 2021 - Present
        </div>
      </div>

      {/* CARD 2 */}
      <div className="w-[832px] bg-[#1F2937] rounded-xl p-8 flex justify-between 
        items-center gap-6
        max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:p-4">

        <img src="logo-upwork.png" className="w-[120px] max-sm:w-[80px]" />

        <div className="flex flex-col gap-4 text-white max-sm:items-center">
          <div className="text-2xl font-semibold">Team Lead</div>
          <div className="flex flex-col gap-1 text-gray-300 text-sm max-sm:text-center">
            <div>• Sed quis justo ac magna.</div>
            <div>• Lorem ipsum dolor sit amet.</div>
            <div>• Sed quis justo ac magna.</div>
            <div>• Lorem ipsum dolor sit amet.</div>
          </div>
        </div>

        <div className="text-gray-400 text-sm max-sm:mt-2">
          Jul 2017 - Oct 2021
        </div>
      </div>

      {/* CARD 3 */}
      <div className="w-[832px] bg-[#1F2937] rounded-xl p-8 flex justify-between 
        items-center gap-6
        max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:p-4">

        <img src="logo-upwork.png" className="w-[120px] max-sm:w-[80px]" />

        <div className="flex flex-col gap-4 text-white max-sm:items-center max-sm:text-center">
          <div className="text-2xl font-semibold">Full Stack Developer</div>
          <div className="text-gray-300 text-sm">
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className="text-gray-400 text-sm max-sm:mt-2">
          Dec 2015 - May 2017
        </div>
      </div>

    </div>
  );
};
