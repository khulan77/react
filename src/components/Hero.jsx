export const Hero = () => {
  return (
    <div className="w-1280 h-364 pt-24 pl-24 flex justify-between">
      <div className="font-normal ml-20 w-xl ">
        <div className="text-white text-6xl flex  font-bold md-15">
          Hi, I’m Tom 👋
        </div>
        <p className="mt-4 text-white">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="flex gap-0.5 mt-2">
          <img src="icon.png" alt="" />
          Ulaanbaatar Mongolia
        </div>
        <div className="flex gap-0.5 ">
          <img src="icon1.png" alt="" />
          Available for new projects
        </div>
      </div>
      <div>
        <img src="tom.png" alt="" />
      </div>
    </div>
  );
};
