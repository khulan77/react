export const Experience = () => {
  return (
    <div className="w-full h-[1140px] bg-[#111827]  flex flex-col items-center pr-25 pl-24 pt-24 gap-12">
      <div className="w-full h-[72px] flex flex-col items-center justify-center  gap-4">
        <button className="bg-[#374151] w-[105px] h-7 rounded-xl">
          Experience
        </button>
        <div className="w-full h-7 flex justify-center">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div className="w-[832px] h-72 bg-[#1F2937] flex rounded-xl justify-center items-center p-8 ;">
        <div className="w-[832px] h-56 flex justify-center ">
          <div className="h-56 w-[250px]">
            <img src="logo-upwork.png" alt="" />
          </div>
          <div className="w-[354px] h-[254px] flex flex-col gap-4">
            <div className="text-white text-2xl flex  font-Semi bold">
              Sr. Frontend Developer
            </div>
            <div className="flex flex-col gap-1">
              <div>
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div>
                • Ut pretium arcu et massa semper, id fringilla leo semper.
              </div>
              <div>• Sed quis justo ac magna.</div>
              <div>
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div>Nov 2021 - Present</div>
        </div>
      </div>
      <div className="w-[832px] h-72 bg-[#1F2937] flex rounded-xl justify-center items-center p-8 ;">
        <div className="w-[832px] h-56 flex justify-center ">
          <div className="h-56 w-[250px]">
            <img src="logo-upwork.png" alt="" />
          </div>
          <div className="w-[354px] h-[254px] flex flex-col gap-4">
            <div className="text-white text-2xl flex  font-Semi bold">
              Team Lead
            </div>
            <div className="flex flex-col gap-1">
              <div>• Sed quis justo ac magna.</div>
              <div>
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div>• Sed quis justo ac magna.</div>
              <div>
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div>Jul 2017 - Oct 2021</div>
        </div>
      </div>
      <div className="w-[832px] h-[188px] bg-[#1F2937] flex rounded-xl justify-center items-center p-[32px];">
        <div className="w-[832px] h-[116px] flex justify-center ">
          <div className="w-56 h-116px]">
            <img src="logo-upwork.png" alt="" />
          </div>
          <div className="w-[384px] h-[116px] ">
            <div className="text-white text-2xl flex  font-Semi bold">
              Full Stack Developer
            </div>
            <div>
              • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div>Dec 2015 - May 2017</div>
        </div>
      </div>
    </div>
  );
};
