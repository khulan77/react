export const Hero = () => {
  return (
    <div className="w-full h-139 flex  justify-center items-center ">
      <div className="w-full h-91 flex justify-center items-center px-8 gap-12">
        <div className="w-[600]  h-[364] flex flex-col justify-between">
          <div className="text-white text-6xl flex  font-bold ">
            Hi, I’m Tom 👋
          </div>
          <p className="w-[580px] h-24 font-thin text-[16px] text-white">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
          <div className="w-[600px] h-14 flex flex-col gap-2">
            <div className="w-[600px] h-6 flex flex-row gap-2 ">
              <img src="loc.png" alt="" />
              <p className="w-[169px] h-6 font-normal text- [16px]">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="w-[600px] h-6 flex flex-row gap-2 ">
              <img src="green.png" alt="" />
              Available for new projects
            </div>
          </div>
          <div className="w-[600px] h-9 flex flex-row ] gap-8 ">
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
