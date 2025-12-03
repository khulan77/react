export const Hero = () => {
  return (
    <div className="w-full h-[556px] flex flex-row justify-center pt-20 pr-25 pl-24">
      <div className="w-7xl h-[364px] flex justify-between pl-[32px] pr-[32px]">
        <div className="font-normal  w-xl flex flex-col gap-12">
          <div className="text-white text-4xl flex  font-bold ">
            Hi, I’m Tom 👋
          </div>
          <p className="w-[580px] h-[96px] font-thin text-[16px] text-white">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
          <div className="w-[600px] h-[56px] flex flex-col gap-2">
            <div className="w-[600px] h-[24px] flex flex-row gap-2 ">
              <img src="loc.png" alt="" />
              <p className="w-[169px] h-[24px] font-normal text- [16px]">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="w-[600px] h-[24px] flex flex-row gap-2">
              <img src="icon1.png" alt="" />
              Available for new projects
            </div>
          </div>
          <div className="w-[600px] h-[36px] flex flex-row ] gap-8 ">
            <img src="github.png" alt="" />
            <img src="twiter.png" alt="" />
            <img src="figma.png" alt="" />
          </div>
        </div>

        <div className="w-[568px] h-[364px] ">
          <img className="ml-[278px]" src="tomtomi.png" alt="" />
        </div>
      </div>
    </div>
  );
};
