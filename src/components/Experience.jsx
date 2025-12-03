export const Experience = () => {
  return (
    <div className="w-full h-[1140px] bg-[#111827]  flex flex-col items-center pr-25 pl-24 pt-[96px] gap-[48px]">
      <div className="w-full h-[72px] flex flex-col items-center justify-center  gap-[5px]">
        <button className="bg-[#374151] w-[105px] h-[28px] rounded-xl">
          Experience
        </button>
        <div className="w-full h-[28px] flex justify-center">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div className="w-[832px] h-[288px] bg-[#1F2937] flex rounded-xl justify-center items-center p-[32px] ;">
        <div className="w-[832px] h-[224px] flex justify-center ">
          <div className="h-[224px] w-[250px]">
            <img src="logo-upwork.png" alt="" />
          </div>
          <div className="w-[354px] h-[254px] flex flex-col gap-[16px]">
            <div className="text-white text-2xl flex  font-Semi bold">
              Sr. Frontend Developer
            </div>
            <div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div>
                Ut pretium arcu et massa semper, id fringilla leo semper.
              </div>
              <div>Sed quis justo ac magna.</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div>Nov 2021 - Present</div>
        </div>
      </div>
      <div className="w-[832px] h-[288px] bg-[#1F2937] flex rounded-xl justify-center items-center p-[32px] ;">
        <div className="w-[832px] h-[224px] flex justify-center ">
          <div className="h-[224px] w-[250px]">
            <img src="logo-upwork.png" alt="" />
          </div>
          <div className="w-[354px] h-[254px] flex flex-col gap-[16px]">
            <div className="text-white text-2xl flex  font-Semi bold">
              Team Lead
            </div>
            <div>
              <div>Sed quis justo ac magna.</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div>Sed quis justo ac magna.</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div>Jul 2017 - Oct 2021</div>
        </div>
      </div>
      <div className="w-[832px] h-[188px] bg-[#1F2937] flex rounded-xl justify-center items-center p-[32px];">
        <div className="w-[832px] h-[116px] flex justify-center ">
          <div className="w-[224px] h-116px]">
            <img src="logo-upwork.png" alt="" />
          </div>
          <div className="w-[384px] h-[116px] ">
            <div className="text-white text-2xl flex  font-Semi bold">
              Full Stack Developer
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div>Dec 2015 - May 2017</div>
        </div>
      </div>
    </div>
  );
};
