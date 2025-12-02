export const Header = () => {
  return (
    <div className="flex justify-between pl-24 pt-8 pr-24 ">
      <div className="text-white text-3xl font-normal md:font-bold">TOM</div>
      <div className="text-base font-medium flex gap-10 justify-center items-center">
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <div>|</div>
        <div>
          <img src="./portfolio.zip" alt="" />
        </div>
        <button className="flex w-37 h-1 p-6 16 6 16 text-center gap-8 justify-center items-center rounded-xl bg-white text-black">
          Download CV
        </button>
      </div>
    </div>
  );
};
