export const Hero = () => {
  return (
    <div className="w-full h-139 flex  justify-center items-center max-sm:h-[940px] max-sm:w-[343px] max-sm:justify-center max-sm:items-center max-sm:flex">
      <div className="w-full h-91 flex justify-center items-center px-8 gap-12 max-sm:h-[776px] max-sm:flex-col-reverse max-sm:w-[343px]">
        <div className="w-[600]  h-[364] flex flex-col max-sm:w-[343px] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:ml-[50px]">
          <div className="text-white text-6xl flex  font-bold max-sm:text-4xl max-sm:mr-26">
            Hi, I’m Tom 👋
          </div>
          <div className="flex flex-col space-y-[70px] max-sm:">
            <p className="w-[580px] h-24 font-thin text-[16px] text-white max-sm:w-[343px] max-sm:h-24">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
            <div className="space-y-[5px]">
              <div className="flex gap-1 pt-5">
                <img src="loc.png" alt="" />
                <p>Ulaanbaatar, Mongolia</p>
              </div>
              <div className="flex gap-1">
                <img src="green.png" alt="" />
                <p>Available for new projects</p>
              </div>
            </div>
          </div>
          <div className="flex mt-6 max-sm:flex max-sm:items-center gap-4 max-sm:w-[343px]">
            <img src="github.png" alt="" />
            <img src="twiter.png" alt="" />
            <img src="figma.png" alt="" />
          </div>
        </div>

        <div className="w-[568px] h-[364px] max-sm:w-[343px] max-sm:h-[300px]">
          <img
            className="ml-[278px]  max-sm:ml-[100px]"
            src="tomtomi.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
