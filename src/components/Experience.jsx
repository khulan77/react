export const Experience = () => {
  return (
    <div
      className="w-full bg-[#111827] flex flex-col items-center px-6 pt-24 pb-24 gap-12
      max-sm:px-4 max-sm:pt-16"
    >
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <button className="bg-[#374151] w-[105px] h-7 rounded-xl text-white">
          Experience
        </button>
        <div className="text-white">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div
        className="w-[832px] bg-[#1F2937] rounded-xl p-8 flex justify-between
       gap-6
        max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:p-4"
      >
        <div>
          <img src="logo-upwork.png" className="w-[120px]" />
        </div>
        <div className="flex flex-col gap-4 text-white max-sm:items-center max-sm:flex">
          <div className="text-2xl font-semibold ">Sr. Frontend Developer</div>
          <div className="hidden max-sm:flex">Nov 2021 - Present</div>
          <div className="flex flex-col gap-1 text-gray-300 text-sm max-sm:text-center">
            <div>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div>• Ut pretium arcu et massa semper.</div>
            <div>• Sed quis justo ac magna.</div>
            <div>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-sm max-sm:mt-2 max-sm:hidden">
          Nov 2021 - Present
        </div>
      </div>
      <div
        className="w-[832px] bg-[#1F2937] rounded-xl p-8 flex justify-between 
        gap-6
        max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:p-4"
      >
        <div>
          <img src="logo-upwork.png" className="w-[120px]" />
        </div>

        <div className="flex flex-col mr-36  text-white max-sm:items-center ">
          <div className="text-2xl font-semibold">Team Lead</div>
          <div className="hidden max-sm:flex">Jul 2017 - Oct 2021</div>
          <div className="flex flex-col gap-1 text-gray-300  max-sm:text-center">
            <div>• Sed quis justo ac magna.</div>
            <div>• Lorem ipsum dolor sit amet.</div>
            <div>• Sed quis justo ac magna.</div>
            <div>• Lorem ipsum dolor sit amet.</div>
          </div>
        </div>

        <div className="text-gray-400 text-sm max-sm:mt-2 max-sm:hidden">
          Jul 2017 - Oct 2021
        </div>
      </div>

      <div
        className="w-[832px] bg-[#1F2937] rounded-xl p-8 flex justify-between 
        gap-6
        max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:p-4"
      >
        <div>
          <img src="logo-upwork.png" className="w-[120px]" />
        </div>
        <div className="flex flex-col gap-4 text-white w-[384px] ml-8 max-sm:items-center max-sm:text-center">
          <div className="text-2xl font-semibold">Full Stack Developer</div>
          <div className="hidden max-sm:flex ">Dec 2015 - May 2017</div>
          <div className="text-gray-300  text-sm">
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <div>• Lorem ipsum dolor sit amet, consectetur adipiscing. </div>
          </div>
        </div>
        <div className="text-gray-400 text-sm max-sm:mt-2 max-sm:hidden">
          Dec 2015 - May 2017
        </div>
      </div>
    </div>
  );
};
